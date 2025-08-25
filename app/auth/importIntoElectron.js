const { session } = require("electron");

exports = module.exports = async function importCookiesIntoElectron(cookies, partition) {
  const sess = session.fromPartition(partition);

  // Allow third-party cookies; AAD uses multiple domains
  sess.setPermissionRequestHandler((_wc, _perm, cb) => cb(true));

  for (const c of cookies) {
    // Electron wants expiry in seconds, domain/path same as Chrome
    const cookie = {
      url: (c.secure ? "https://" : "http://") + (c.domain.startsWith(".") ? c.domain.slice(1) : c.domain) + (c.path || "/"),
      name: c.name,
      value: c.value,
      domain: c.domain,
      path: c.path || "/",
      secure: c.secure,
      httpOnly: c.httpOnly,
      expirationDate: c.expires > 0 ? c.expires : undefined,
      sameSite: mapSameSite(c.sameSite), // "Strict" | "Lax" | "None"
    };

    try {
      await sess.cookies.set(cookie);
    } catch (e) {
      // Some host-only vs domain cookie quirks can throw; skip non-critical ones
      // You can retry with adjusted domain/path if needed.
      console.warn("Cookie set failed", c.name, e);
    }
  }
}

function mapSameSite(ss) {
  if (!ss) return "lax";
  const m = ss.toLowerCase();
  if (m.includes("none")) return "no_restriction";
  if (m.includes("strict")) return "strict";
  return "lax";
}
