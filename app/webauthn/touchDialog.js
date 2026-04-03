// app/webauthn/touchDialog.js

const { BrowserWindow } = require("electron");
const path = require("node:path");

/**
 * Show touch prompt via standalone BrowserWindow.
 * Shows an independent (non-modal) window that stays on top.
 * Called while waiting for fido2-tools.
 *
 * @param {string} hint - An additional hint to show in the window
 * @returns {Window}
 */
function showTouchPrompt(hint) {
  console.info("[WEBAUTHN:TOUCH] showing standalone touch window");
  const win = new BrowserWindow({
    width: 380,
    height: 220,
    modal: false,
    frame: true,
    parent: null,
    show: false,
    resizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    title: "Touch your Security Key",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  win.once("ready-to-show", () => {
    win.show();
    win.focus();
    console.info("[WEBAUTHN:TOUCH] window shown and focused");
  });

  // win.loadFile(path.join(__dirname, "touchDialog.html"));
  const filePath = path.join(__dirname, "touchDialog.html");
  const params = new URLSearchParams({ hint: hint || '' });
  win.loadURL(`file://${filePath}?${params.toString()}`);

  return win;
}

module.exports = { showTouchPrompt };
