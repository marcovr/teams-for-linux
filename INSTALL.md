# How to use this fork

## Prerequisites

You need a **chromium based browser** installed.
If you have either `chromium`, `chrome` or `brave` in your PATH, it will work.
[See here](https://github.com/marcovr/teams-for-linux/blob/main/app/auth/launchChromium.js#L33).

Otherwise, you can set the environment variable `T4L_CHROMIUM_BINARY` to a suitbale binary name / file path.

## Testing

```sh
npm install
npm run start
```

## Installation

### NixOS

First, create a patch file

```sh
./create_patch.sh
```

Then, modify the [teams-for-linux package](https://github.com/NixOS/nixpkgs/blob/nixos-25.05/pkgs/by-name/te/teams-for-linux/package.nix)
to include the patch and update the npmDepsHash. For example:

```nix
  # ...
  patches = [ /development/teams-for-linux/0001-Patch-for-fido.patch ];
  npmDepsHash = "sha256-DspCw2MmuH3tWPl9ErK8MsHM4tW5I4GCWN9Fv4pZ2Hg=";
  # ...
```

### Generic Linux


```sh
npm install
npm run pack
```

The packaged teams-for-linux waits for you in the `./dist/` folder.
Just link the binary to a folder in your path env. For example:

```sh
ln -s "$(pwd)/dist/linux-unpacked/teams-for-linux" "/usr/bin/teams-for-linux"
```

If needed, add a desktop file, like `~/.local/share/applications/teams-for-linux.desktop`:

```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Teams for Linux
Icon=/opt/teams-for-linux/build/icons/256x256.png
Exec="/usr/bin/teams-for-linux"
Comment=An electron port for Microsoft Teams
Categories=Chat;
Terminal=false
StartupWMClass=teams-for-linux
StartupNotify=true
```

If you need to use the `T4L_CHROMIUM_BINARY` environment variable you can set it directly in the desktop Exec command:

```ini
Exec=env T4L_CHROMIUM_BINARY=chromium-browser T/usr/bin/teams-for-linux
```

