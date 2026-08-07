import crypto from "node:crypto";
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse
} from "@simplewebauthn/server";
import {
  getAdminPasskey,
  listAdminPasskeys,
  saveAdminPasskey,
  updateAdminPasskeyCounter
} from "./pipMemory.js";

const RP_NAME = "HydroPip Control Center";
const FLOW_TTL_MS = 5 * 60 * 1000;
const registrationFlows = new Map();
const authenticationFlows = new Map();

export async function adminPasskeyStatus() {
  const passkeys = await listAdminPasskeys();
  return {
    enrolled: passkeys.length > 0,
    count: passkeys.length,
    rpId: passkeyRpId()
  };
}

export async function beginAdminPasskeyRegistration() {
  cleanupFlows(registrationFlows);
  const passkeys = await listAdminPasskeys();
  const options = await generateRegistrationOptions({
    rpName: RP_NAME,
    rpID: passkeyRpId(),
    userName: "HydroPip administrator",
    userDisplayName: "HydroPip administrator",
    userID: new TextEncoder().encode("hydropip-control-admin"),
    attestationType: "none",
    timeout: 60_000,
    excludeCredentials: passkeys.map((passkey) => ({ id: passkey.credentialId, transports: passkey.transports })),
    authenticatorSelection: {
      residentKey: "preferred",
      userVerification: "required"
    },
    preferredAuthenticatorType: "localDevice"
  });
  const flowId = crypto.randomUUID();
  registrationFlows.set(flowId, { challenge: options.challenge, expiresAt: Date.now() + FLOW_TTL_MS });
  return { flowId, options };
}

export async function finishAdminPasskeyRegistration({ flowId, response } = {}) {
  const flow = takeFlow(registrationFlows, flowId);
  if (!flow) throw passkeyError("passkey_registration_expired", 400, "Face ID setup expired. Start again.");
  const verification = await verifyRegistrationResponse({
    response,
    expectedChallenge: flow.challenge,
    expectedOrigin: passkeyOrigin(),
    expectedRPID: passkeyRpId(),
    requireUserVerification: true
  });
  if (!verification.verified || !verification.registrationInfo) {
    throw passkeyError("passkey_registration_failed", 401, "Face ID setup could not be verified.");
  }
  const { credential, credentialDeviceType, credentialBackedUp } = verification.registrationInfo;
  const saved = await saveAdminPasskey({
    credentialId: credential.id,
    publicKey: Buffer.from(credential.publicKey).toString("base64url"),
    counter: credential.counter,
    transports: response?.response?.transports || credential.transports || [],
    deviceType: credentialDeviceType,
    backedUp: credentialBackedUp
  });
  return { verified: true, passkey: publicPasskey(saved) };
}

export async function beginAdminPasskeyAuthentication() {
  cleanupFlows(authenticationFlows);
  const passkeys = await listAdminPasskeys();
  if (!passkeys.length) throw passkeyError("passkey_not_enrolled", 404, "Enter the recovery key once to set up Face ID.");
  const options = await generateAuthenticationOptions({
    rpID: passkeyRpId(),
    timeout: 60_000,
    userVerification: "required",
    allowCredentials: passkeys.map((passkey) => ({ id: passkey.credentialId, transports: passkey.transports }))
  });
  const flowId = crypto.randomUUID();
  authenticationFlows.set(flowId, { challenge: options.challenge, expiresAt: Date.now() + FLOW_TTL_MS });
  return { flowId, options };
}

export async function finishAdminPasskeyAuthentication({ flowId, response } = {}) {
  const flow = takeFlow(authenticationFlows, flowId);
  if (!flow) throw passkeyError("passkey_authentication_expired", 400, "Face ID request expired. Try again.");
  const passkey = await getAdminPasskey({ credentialId: response?.id });
  if (!passkey) throw passkeyError("passkey_not_recognized", 401, "This device passkey is not enrolled for HydroPip Control.");
  const verification = await verifyAuthenticationResponse({
    response,
    expectedChallenge: flow.challenge,
    expectedOrigin: passkeyOrigin(),
    expectedRPID: passkeyRpId(),
    credential: {
      id: passkey.credentialId,
      publicKey: Buffer.from(passkey.publicKey, "base64url"),
      counter: passkey.counter,
      transports: passkey.transports
    },
    requireUserVerification: true
  });
  if (!verification.verified) throw passkeyError("passkey_authentication_failed", 401, "Face ID or device passcode was not verified.");
  const updated = await updateAdminPasskeyCounter({
    credentialId: passkey.credentialId,
    counter: verification.authenticationInfo.newCounter,
    deviceType: verification.authenticationInfo.credentialDeviceType,
    backedUp: verification.authenticationInfo.credentialBackedUp
  });
  return { verified: true, passkey: publicPasskey(updated) };
}

export function passkeyRpId() {
  return String(process.env.PIP_ADMIN_PASSKEY_RP_ID || "hydropip-pip-api.onrender.com").trim();
}

export function passkeyOrigin() {
  return String(process.env.PIP_ADMIN_PASSKEY_ORIGIN || process.env.RENDER_EXTERNAL_URL || "https://hydropip-pip-api.onrender.com")
    .trim()
    .replace(/\/$/, "");
}

function takeFlow(store, flowId) {
  cleanupFlows(store);
  const id = String(flowId || "").trim();
  const flow = store.get(id);
  if (flow) store.delete(id);
  return flow || null;
}

function cleanupFlows(store) {
  const now = Date.now();
  for (const [id, flow] of store) {
    if (!flow || flow.expiresAt <= now) store.delete(id);
  }
}

function publicPasskey(passkey) {
  return {
    credentialId: passkey?.credentialId || null,
    deviceType: passkey?.deviceType || "unknown",
    backedUp: Boolean(passkey?.backedUp),
    createdAt: passkey?.createdAt || null,
    lastUsedAt: passkey?.lastUsedAt || null
  };
}

function passkeyError(code, statusCode, message) {
  return Object.assign(new Error(message), { code, statusCode });
}
