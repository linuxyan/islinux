# Essential Linux Package Management Commands

## Introduction

Package management is crucial for installing, updating, and maintaining software on Linux systems. Different distributions use different package managers, but the concepts are similar. This guide covers 10 essential package management commands for Debian/Ubuntu (APT) and Red Hat/CentOS (YUM/DNF) systems.

---

## 1. apt - Advanced Package Tool (Debian/Ubuntu)

High-level package management interface.

```bash
# Update package list
sudo apt update

# Upgrade installed packages
sudo apt upgrade

# Full upgrade (handles dependencies)
sudo apt full-upgrade

# Install package
sudo apt install nginx

# Install specific version
sudo apt install nginx=1.18.0-1

# Remove package (keep config)
sudo apt remove nginx

# Remove package completely
sudo apt purge nginx

# Remove unused dependencies
sudo apt autoremove

# Clean package cache
sudo apt clean

# Search for package
apt search web server

# Show package info
apt show nginx

# List installed packages
apt list --installed

# List upgradable packages
apt list --upgradable

# Install from specific file
sudo apt install ./package.deb

# Download package without installing
apt download nginx
```

**Common Commands:**
- `update`: Refresh package list
- `upgrade`: Upgrade packages
- `install`: Install package
- `remove`: Remove package
- `purge`: Remove with config
- `search`: Search packages
- `show`: Package details
- `autoremove`: Clean unused

---

## 2. dpkg - Debian Package Manager

Low-level package management for .deb files.

```bash
# Install .deb package
sudo dpkg -i package.deb

# Install with dependency resolution
sudo dpkg -i package.deb && sudo apt -f install

# Remove package
sudo dpkg -r package

# Purge package
sudo dpkg -P package

# List installed packages
dpkg -l

# Search for package
dpkg -l | grep nginx

# Show package info
dpkg -s nginx

# List package files
dpkg -L nginx

# Show package contents
dpkg -c package.deb

# Find which package owns file
dpkg -S /usr/bin/nginx

# Extract .deb without installing
dpkg -x package.deb /destination/

# Unpack without configuring
sudo dpkg --unpack package.deb
```

**Common Options:**
- `-i`: Install
- `-r`: Remove
- `-P`: Purge
- `-l`: List packages
- `-s`: Show info
- `-L`: List files
- `-S`: Search owner
- `-c`: List contents

---

## 3. yum - Yellowdog Updater Modified (RHEL/CentOS)

Package manager for Red Hat-based systems.

```bash
# Update all packages
sudo yum update

# Update specific package
sudo yum update nginx

# Install package
sudo yum install nginx

# Remove package
sudo yum remove nginx

# Search for package
yum search web server

# Show package info
yum info nginx

# List installed packages
yum list installed

# List available packages
yum list available

# List repositories
yum repolist

# Enable repository
sudo yum-config-manager --enable repo-name

# Disable repository
sudo yum-config-manager --disable repo-name

# Clean cache
sudo yum clean all

# Download without installing
yumdownloader nginx

# Show what provides a file
yum provides /usr/bin/nginx

# History management
yum history
yum history undo 5
```

**Common Commands:**
- `update`: Upgrade packages
- `install`: Install package
- `remove`: Remove package
- `search`: Search packages
- `info`: Package details
- `repolist`: List repos
- `clean`: Clean cache

---

## 4. dnf - Dandified YUM (Fedora/RHEL 8+)

Next-generation package manager.

```bash
# Update all packages
sudo dnf update

# Upgrade specific package
sudo dnf upgrade nginx

# Install package
sudo dnf install nginx

# Remove package
sudo dnf remove nginx

# Search for package
dnf search web server

# Show package info
dnf info nginx

# List installed packages
dnf list installed

# Show dependencies
dnf deplist nginx

# Show what provides file
dnf provides /usr/bin/nginx

# Clean cache
sudo dnf clean all

# List repositories
dnf repolist

# Enable repository
sudo dnf config-manager --enable repo

# Disable repository
sudo dnf config-manager --disable repo

# History management
dnf history
dnf history undo 5

# Remove unused dependencies
sudo dnf autoremove
```

**Note:** DNF is the successor to YUM with better performance and dependency resolution.

---

## 5. rpm - RPM Package Manager

Low-level package manager for .rpm files.

```bash
# Install .rpm package
sudo rpm -ivh package.rpm

# Upgrade package
sudo rpm -Uvh package.rpm

# Freshen (upgrade existing only)
sudo rpm -Fvh package.rpm

# Remove package
sudo rpm -e package

# List all installed packages
rpm -qa

# Search for package
rpm -qa | grep nginx

# Show package info
rpm -qi nginx

# List package files
rpm -ql nginx

# Show package contents
rpm -qlp package.rpm

# Find which package owns file
rpm -qf /usr/bin/nginx

# Verify package
rpm -V nginx

# Verify all packages
rpm -Va

# Import GPG key
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-centos

# Check signature
rpm -K package.rpm
```

**Common Options:**
- `-i`: Install
- `-U`: Upgrade
- `-e`: Erase
- `-q`: Query
- `-a`: All packages
- `-l`: List files
- `-f`: Find owner
- `-V`: Verify

---

## 6. snap - Snap Packages

Universal package manager by Canonical.

```bash
# Install snap package
sudo snap install nginx

# Install from specific channel
sudo snap install nginx --stable

# List installed snaps
snap list

# Remove snap
sudo snap remove nginx

# Update all snaps
sudo snap refresh

# Update specific snap
sudo snap refresh nginx

# Show snap info
snap info nginx

# Search for snaps
snap find web server

# Show snap services
snap services

# Enable snap service
sudo snap start nginx

# Disable snap service
sudo snap stop nginx

# Show snap connections
snap connections nginx

# Connect snap interface
sudo snap connect nginx:network

# List snap versions
snap list --all

# Revert to previous version
sudo snap revert nginx
```

**Common Commands:**
- `install`: Install snap
- `remove`: Remove snap
- `refresh`: Update snaps
- `list`: List installed
- `info`: Package details
- `find`: Search snaps
- `services`: Show services

---

## 7. flatpak - Flatpak Packages

Universal package manager for desktop applications.

```bash
# Install flatpak app
flatpak install flathub org.gimp.GIMP

# List installed apps
flatpak list

# Remove app
flatpak uninstall org.gimp.GIMP

# Update all apps
flatpak update

# Update specific app
flatpak update org.gimp.GIMP

# Search for apps
flatpak search gimp

# Show app info
flatpak info org.gimp.GIMP

# Run app
flatpak run org.gimp.GIMP

# List remotes
flatpak remotes

# Add remote
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Remove remote
flatpak remote-delete flathub

# Repair installation
flatpak repair

# List runtimes
flatpak list --runtimes

# Cleanup unused data
flatpak uninstall --unused
```

**Common Commands:**
- `install`: Install app
- `uninstall`: Remove app
- `update`: Update apps
- `list`: List installed
- `search`: Search apps
- `run`: Run application

---

## 8. pip - Python Package Manager

Install and manage Python packages.

```bash
# Install package
pip install package

# Install specific version
pip install package==1.2.3

# Upgrade package
pip install --upgrade package

# Remove package
pip uninstall package

# List installed packages
pip list

# Show package info
pip show package

# Search for package
pip search package

# Install from requirements
pip install -r requirements.txt

# Generate requirements file
pip freeze > requirements.txt

# Install to user directory
pip install --user package

# Install in virtual environment
python -m venv venv
source venv/bin/activate
pip install package

# Check for outdated packages
pip list --outdated

# Install without dependencies
pip install --no-deps package
```

**Common Options:**
- `install`: Install package
- `uninstall`: Remove package
- `list`: List packages
- `show`: Package info
- `freeze`: List with versions
- `upgrade`: Upgrade package

---

## 9. npm - Node.js Package Manager

Install and manage Node.js packages.

```bash
# Install package
npm install package

# Install globally
npm install -g package

# Install specific version
npm install package@1.2.3

# Install as dependency
npm install --save package

# Install as dev dependency
npm install --save-dev package

# Remove package
npm uninstall package

# List installed packages
npm list

# List global packages
npm list -g

# Update package
npm update package

# Show package info
npm show package

# Search for package
npm search package

# Clear cache
npm cache clean --force

# Initialize new project
npm init

# Run scripts
npm run build
npm start
npm test

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit
npm audit fix
```

**Common Commands:**
- `install`: Install package
- `uninstall`: Remove package
- `list`: List packages
- `update`: Update packages
- `show`: Package info
- `search`: Search packages
- `audit`: Security audit

---

## 10. pacman - Package Manager (Arch Linux)

Package manager for Arch Linux and derivatives.

```bash
# Update package list
sudo pacman -Sy

# Upgrade all packages
sudo pacman -Su

# Sync and upgrade
sudo pacman -Syu

# Install package
sudo pacman -S nginx

# Remove package (keep dependencies)
sudo pacman -R nginx

# Remove package and dependencies
sudo pacman -Rs nginx

# Remove package and config
sudo pacman -Rn nginx

# Search for package
pacman -Ss nginx

# Show package info
pacman -Si nginx

# List installed packages
pacman -Q

# List explicitly installed
pacman -Qe

# List orphan packages
pacman -Qdt

# Remove orphans
sudo pacman -Rns $(pacman -Qdtq)

# Show package files
pacman -Ql nginx

# Find which package owns file
pacman -Qo /usr/bin/nginx

# Clean package cache
sudo pacman -Sc

# Clean all cached packages
sudo pacman -Scc

# Download without installing
pacman -Sw nginx
```

**Common Options:**
- `-S`: Sync/install
- `-R`: Remove
- `-Q`: Query local
- `-Ss`: Search remote
- `-Si`: Info remote
- `-Ql`: List files
- `-Qo`: Find owner
- `-Sc`: Clean cache

---

## Practical Examples

### System Update Script

```bash
#!/bin/bash
# update_system.sh

echo "=== Updating System ==="

# Debian/Ubuntu
if command -v apt &> /dev/null; then
    sudo apt update
    sudo apt upgrade -y
    sudo apt autoremove -y
fi

# RHEL/CentOS/Fedora
if command -v dnf &> /dev/null; then
    sudo dnf update -y
    sudo dnf autoremove -y
fi

if command -v yum &> /dev/null; then
    sudo yum update -y
fi

# Arch Linux
if command -v pacman &> /dev/null; then
    sudo pacman -Syu --noconfirm
    sudo pacman -Rns $(pacman -Qdtq) --noconfirm
fi

echo "Update complete"
```

### Install Development Tools

```bash
#!/bin/bash
# install_dev_tools.sh

# Debian/Ubuntu
sudo apt update
sudo apt install -y \
    git vim curl wget \
    build-essential gcc make \
    python3 python3-pip \
    nodejs npm \
    docker.io

# RHEL/CentOS
sudo dnf groupinstall "Development Tools" -y
sudo dnf install -y \
    git vim curl wget \
    python3 python3-pip \
    nodejs npm

# Arch Linux
sudo pacman -S --noconfirm \
    base-devel git vim curl wget \
    python python-pip \
    nodejs npm \
    docker
```

### Cleanup Package Cache

```bash
#!/bin/bash
# cleanup_packages.sh

echo "=== Cleaning Package Cache ==="

# Debian/Ubuntu
if command -v apt &> /dev/null; then
    sudo apt clean
    sudo apt autoremove -y
fi

# RHEL/CentOS
if command -v yum &> /dev/null; then
    sudo yum clean all
fi

if command -v dnf &> /dev/null; then
    sudo dnf clean all
fi

# Arch Linux
if command -v pacman &> /dev/null; then
    sudo pacman -Sc --noconfirm
fi

# Clear pip cache
pip cache purge 2>/dev/null

# Clear npm cache
npm cache clean --force 2>/dev/null

echo "Cleanup complete"
```

### List Outdated Packages

```bash
#!/bin/bash
# check_updates.sh

echo "=== Checking for Updates ==="

# APT
if command -v apt &> /dev/null; then
    echo "Debian/Ubuntu packages:"
    apt list --upgradable 2>/dev/null | tail -n +2
fi

# DNF
if command -v dnf &> /dev/null; then
    echo "DNF packages:"
    dnf check-update 2>/dev/null
fi

# Snap
if command -v snap &> /dev/null; then
    echo "Snap packages:"
    snap refresh --list 2>/dev/null
fi

# Flatpak
if command -v flatpak &> /dev/null; then
    echo "Flatpak packages:"
    flatpak remote-ls --app flathub 2>/dev/null
fi

# NPM global
if command -v npm &> /dev/null; then
    echo "NPM global packages:"
    npm outdated -g 2>/dev/null
fi

# Pip
if command -v pip &> /dev/null; then
    echo "Python packages:"
    pip list --outdated 2>/dev/null
fi
```

---

## Quick Reference Table

| Command | Distribution | Example |
|---------|--------------|---------|
| apt | Debian/Ubuntu | `apt install nginx` |
| dpkg | Debian/Ubuntu | `dpkg -i package.deb` |
| yum | RHEL/CentOS | `yum install nginx` |
| dnf | Fedora/RHEL8+ | `dnf install nginx` |
| rpm | RHEL/CentOS | `rpm -ivh package.rpm` |
| snap | Universal | `snap install nginx` |
| flatpak | Universal | `flatpak install app` |
| pip | Python | `pip install requests` |
| npm | Node.js | `npm install express` |
| pacman | Arch Linux | `pacman -S nginx` |

---

## Conclusion

These 10 package management commands enable you to:

- Install and remove software packages
- Update system and applications
- Search for available packages
- Manage dependencies automatically
- Clean package cache and unused files
- Handle multiple package formats

Master these commands for effective software management on any Linux distribution.

---

**Related Articles:**
- [Linux System Information Commands](linux-system-info-commands.html)
- [Linux File and Directory Commands](linux-file-directory-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
