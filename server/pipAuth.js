import crypto from "node:crypto";

const SESSION_ISSUER = "hydropip-wix";
const SESSION_AUDIENCE = "hydropip-pip-api";
const DEFAULT_SESSION_TTL_SECONDS = 60 * 60;

export function issuePipSession({ member, subscription } = {}) {
  const secret = sessionSecret();
  const memberId = String(member?.id || member?._id || "").trim();
  if (!secret || !memberId) return null;

  const now = Math.floor(Date.now() / 1000);
  const ttlSeconds = sessionTtlSeconds();
  const payload = {
    sub: memberId,
    email: cleanOptional(member?.email),
    name: cleanOptional(member?.name),
    plan: subscription?.active ? "pip_pro" : "free_member",
    planName: cleanOptional(subscription?.planName),
    pro: Boolean(subscription?.active),
    beta: Boolean(subscription?.active && subscription?.beta),
    iat: now,
    exp: now + ttlSeconds,
    iss: SESSION_ISSUER,
    aud: SESSION_AUDIENCE,
    jti: crypto.randomUUID()
  };
  const encoded = encodeJson(payload);
  return `${encoded}.${sign(encoded, secret)}`;
}

export function verifyPipSession(token) {
  const secret = sessionSecret();
  const [encoded, signature, extra] = String(token || "").split(".");
  if (!secret || !encoded || !signature || extra) return null;

  const expected = sign(encoded, secret);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(actualBuffer, expectedBuffer)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    const now = Math.floor(Date.now() / 1000);
    if (
      payload.iss !== SESSION_ISSUER
      || payload.aud !== SESSION_AUDIENCE
      || !payload.jti
      || !payload.sub
      || !payload.iat
      || !payload.exp
      || payload.exp <= now
      || payload.iat > now + 60
      || payload.exp - payload.iat > sessionTtlSeconds() + 60
    ) return null;
    return payload;
  } catch {
    return null;
  }
}

export function sessionFromRequest(req) {
  const authorization = String(req.headers.authorization || "");
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  return verifyPipSession(token);
}

export function bridgeRequestAllowed(req) {
  const secret = sessionSecret();
  const supplied = String(req.headers["x-pip-bridge-secret"] || "");
  if (!secret || !supplied) return false;
  const actualBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(secret);
  return actualBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(actualBuffer, expectedBuffer);
}

export function adminRequestAllowed(req) {
  const secret = String(process.env.PIP_ADMIN_KEY || "").trim();
  const authorization = String(req.headers.authorization || "");
  const supplied = authorization.startsWith("Bearer ")
    ? authorization.slice(7).trim()
    : String(req.headers["x-pip-admin-key"] || "").trim();
  if (!secret || !supplied) return false;
  const actualBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(secret);
  return actualBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(actualBuffer, expectedBuffer);
}

export function signedSessionsRequired() {
  return String(process.env.PIP_REQUIRE_SIGNED_SESSIONS || "false").toLowerCase() === "true";
}

export function signedSessionsConfigured() {
  return Boolean(sessionSecret());
}

function sessionSecret() {
  return String(process.env.PIP_BRIDGE_SECRET || "").trim();
}

function sessionTtlSeconds() {
  const configured = Number(process.env.PIP_SESSION_TTL_SECONDS);
  if (!Number.isFinite(configured)) return DEFAULT_SESSION_TTL_SECONDS;
  return Math.max(300, Math.min(6 * 60 * 60, Math.floor(configured)));
}

function sign(encoded, secret) {
  return crypto.createHmac("sha256", secret).update(encoded).digest("base64url");
}

function encodeJson(value) {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function cleanOptional(value) {
  const cleaned = String(value || "").trim();
  return cleaned ? cleaned.slice(0, 240) : null;
}
