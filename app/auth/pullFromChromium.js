const CDP = require("chrome-remote-interface");

const COOKIE_DOMAINS = [
  "teams.microsoft.com",
  "login.microsoftonline.com",
  ".login.microsoftonline.com",
  ".msauth.net",
  ".msftauth.net",
  ".microsoft.com",
];

exports = module.exports = async function fetchCookies(port) {
  const client = await CDP({ port });
  const { Network } = client;

  await Network.enable({});
  // Fetch all cookies Chromium currently holds
  const all = await Network.getAllCookies();
  await client.close();

  // Filter to interesting domains
  const wantedCookies = all.cookies.filter(c => {
    return COOKIE_DOMAINS.some(d => {
      // match exact or suffix
      return c.domain === d || c.domain.endsWith(d);
    });
  });

  return wantedCookies;
}
