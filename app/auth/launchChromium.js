const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { spawn } = require("node:child_process");
const getPort = require("get-port").default;
const tmp = require("tmp");
const fs = require('fs');

exports = module.exports = async function launchChromium() {
  const port = await getPort();
  const tmpDir = tmp.dirSync({ unsafeCleanup: true }).name;

  const binary = await getSuitableBinary();
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

  const proc = spawn(binary, args, { stdio: "ignore", detached: false });

  return { proc, port, userDataDir: tmpDir };
}

async function getSuitableBinary() {
  const envVariableName = "T4L_CHROMIUM_BINARY";
  const binaryVariable = process.env[envVariableName];
  const suitableBinaries = ["chromium", "chrome", "brave"];

  if (binaryVariable) {
    console.log(`Variable '${envVariableName}' set`);
    if (fs.existsSync(binaryVariable)) {
      return binaryVariable;
    }
    suitableBinaries.unshift(binaryVariable);
  } else {
    console.log(`Variable '${envVariableName}' not set`);
  }

  console.log(`Trying to find one of the following binaries in PATH: ['${suitableBinaries.join("', '")}']`);

  for (const suitableBinary of suitableBinaries) {
    if (await which(suitableBinary)) {
      return suitableBinary;
    }
  }

  throw new Error(`No suitable chromium binary found! Consider setting '${envVariableName}'`);
}

async function which(binaryName) {
  try {
    const { stdout } = await exec(`which ${binaryName}`);
    console.log(`'${binaryName}' found in PATH: ${stdout.trim()}`);
    return true;
  }
  catch {
    console.log(`'${binaryName}' not found in PATH.`);
    return false;
  }
}
