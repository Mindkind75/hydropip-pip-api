import crypto from "node:crypto";

const SESSION_TTL_SECONDS = 6 * 60 * 60;

export function issuePipSession({ member, subscription } = {}) {
  const secret = sessionSecret();
  const memberId = String(member?.id || member?._id || "").trim();
  if (!secret || !memberId) return null;

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    sub: memberId,
    email: cleanOptional(member?.email),
    name: cleanOptional(member?.name),
    plan: subscription?.active ? "pip_pro" : "free_member",
    planName: cleanOptional(subscription?.planName),
    pro: Boolean(subscription?.active),
    beta: Boolean(subscription?.active && subscription?.beta),
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
    iss: "hydropip-wix"
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
    if (payload.iss !== "hydropip-wix" || !payload.sub || !payload.exp || payload.exp <= now) return null;
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

export function signedSessionsRequired() {
  return String(process.env.PIP_REQUIRE_SIGNED_SESSIONS || "false").toLowerCase() === "true";
}

export function signedSessionsConfigured() {
  return Boolean(sessionSecret());
}

function sessionSecret() {
  return String(process.env.PIP_BRIDGE_SECRET || "").trim();
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
