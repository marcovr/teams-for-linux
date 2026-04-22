# Teams for Linux

[![Matrix Space](https://img.shields.io/matrix/teams-for-linux-space%3Amatrix.org?server_fqdn=matrix.org&label=Matrix%20Space)](https://matrix.to/#/#teams-for-linux-space:matrix.org "Matrix Space")
![](https://img.shields.io/github/release/IsmaelMartinez/teams-for-linux.svg?style=flat)
![](https://img.shields.io/github/downloads/IsmaelMartinez/teams-for-linux/total.svg?style=flat)
![Build & Release](https://github.com/IsmaelMartinez/teams-for-linux/workflows/Build%20&%20Release/badge.svg)
![](https://img.shields.io/librariesio/github/IsmaelMartinez/teams-for-linux)
[![Known Vulnerabilities](https://snyk.io//test/github/IsmaelMartinez/teams-for-linux/badge.svg?targetFile=package.json)](https://snyk.io//test/github/IsmaelMartinez/teams-for-linux?targetFile=package.json)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=IsmaelMartinez_teams-for-linux&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=IsmaelMartinez_teams-for-linux)

> [!NOTE]  
> This is a fork of [Teams for Linux](https://github.com/IsmaelMartinez/teams-for-linux/)
with patch to work around the limitations of electron apps related to FIDO authentication: https://github.com/electron/electron/issues/24573

---

**Unofficial Microsoft Teams client for Linux** — a native desktop app that wraps the Teams web version with enhanced Linux integration.

✅ **System notifications**  
✅ **System tray integration** (badge support varies by desktop environment)  
✅ **Custom backgrounds & themes**  
✅ **Screen sharing support**  
✅ **Multiple account profiles**  

> [!NOTE]
> This is an independent project, not affiliated with Microsoft. Some features are limited by the Teams web app.

## Installation

> [!NOTE]  
> For installation instructions specific to this fork, see [INSTALL.md](INSTALL.md)

---

## Quick Start

1. **Install** using your preferred method above
2. **Launch** with `teams-for-linux` 
3. **Configure** by creating `~/.config/teams-for-linux/config.json` if needed

## Documentation

📖 **[Complete Documentation](https://ismaelmartinez.github.io/teams-for-linux/)** — Enhanced documentation with search, mobile optimization, and comprehensive guides

| Topic | Description |
|-------|-------------|
| **[Installation Guide](https://ismaelmartinez.github.io/teams-for-linux/installation)** | Package repositories and installation methods |
| **[Configuration Guide](https://ismaelmartinez.github.io/teams-for-linux/configuration)** | Complete setup and configuration options |
| **[Troubleshooting](https://ismaelmartinez.github.io/teams-for-linux/troubleshooting)** | Common issues and solutions |
| **[Multiple Profiles](https://ismaelmartinez.github.io/teams-for-linux/multiple-instances)** | Running work & personal accounts |
| **[Custom Backgrounds](https://ismaelmartinez.github.io/teams-for-linux/custom-backgrounds)** | Video call backgrounds setup |
| **[Contributing](https://ismaelmartinez.github.io/teams-for-linux/contributing)** | Development setup and contribution guidelines |

## Project Activity

![Alt](https://repobeats.axiom.co/api/embed/e63dcc8b154ee5f4490674818df091c243b041b7.svg "Repobeats analytics image")

## Support & Community

- 💬 **Chat**: Join our [Matrix Space](https://matrix.to/#/#teams-for-linux-space:matrix.org)
- 🐛 **Issues**: [Report bugs](https://github.com/IsmaelMartinez/teams-for-linux/issues)
- 🤝 **Contributing**: See [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Security & Sandboxing

Electron's contextIsolation and sandbox features are disabled to enable Teams DOM access functionality. For enhanced security, use system-level sandboxing:

**Available options**:
- **Flatpak**: Built-in isolation via Flathub
- **Snap packages**: Application confinement with auto-updates
- **Firejail**: Use this [script](https://codeberg.org/lars_uffmann/teams-for-linux-jailed) for manual sandboxing
- **AppArmor/SELinux**: Most Linux distributions include these by default

System-level sandboxing provides better isolation than Electron's built-in features while preserving full functionality.

## Advanced Usage

## History

Read about the history of this project in the [`HISTORY.md`](HISTORY.md) file.

## License

**GPL-3.0** — See [`LICENSE.md`](LICENSE.md)

Icons from [Icon Duck](https://iconduck.com/sets/hugeicons-essential-free-icons) (CC BY 4.0)
