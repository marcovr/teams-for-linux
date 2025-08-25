const { spawn } = require("node:child_process");
const getPort = require("get-port").default;
const tmp = require("tmp");

exports = module.exports = async function launchChromium() {
  const port = await getPort();
  const tmpDir = tmp.dirSync({ unsafeCleanup: true }).name;

  const args = [
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tmpDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-default-apps",
    "--disable-features=NetworkServiceInProcess", // stability
    "--enable-features=NetworkService,TrustTokens,StorageAccessAPI",
    "--incognito=false",
    "https://teams.microsoft.com",
  ];

  const proc = spawn("chromium", args, { stdio: "ignore", detached: false });

  return { proc, port, userDataDir: tmpDir };
}
