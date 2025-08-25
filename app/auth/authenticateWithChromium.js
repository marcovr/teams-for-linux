const launchChromium = require("./launchChromium");
const fetchCookies = require("./pullFromChromium");
const importCookiesIntoElectron = require("./importIntoElectron");

exports = module.exports = async function doIt(partition) {
  console.log(`Launching Chromium for login flow`);
  const chrome = await launchChromium();
  const cookies = await waitForCookies(chrome);
  chrome.proc.kill("SIGTERM");

  console.log(`Importing cookies into partition '${partition}'`);
  await importCookiesIntoElectron(cookies, partition);
}

async function waitForCookies(chrome) {
  let cookies = [];

  while (!isLoggedIn(cookies)) {
    console.log("Waiting for cookies...");
    await sleep(3_000);
    cookies = await fetchCookies(chrome.port);
  }

  return cookies;
}

function isLoggedIn(cookies) {
  return cookies.find(c => c.name.startsWith("ESTS")) // e.g. ESTSAUTH
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}
