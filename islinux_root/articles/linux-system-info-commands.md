# Essential Linux System Information Commands

## Introduction

Understanding your Linux system's hardware, kernel, and configuration is essential for troubleshooting, optimization, and documentation. This guide covers 10 essential commands for gathering comprehensive system information.

---

## 1. uname - System Information

Display kernel and system information.

```bash
# Show kernel name
uname -s

# Show kernel version
uname -r

# Show kernel release
uname -v

# Show machine hardware
uname -m

# Show processor type
uname -p

# Show hardware platform
uname -i

# Show operating system
uname -o

# Show all information
uname -a

# Example output:
# Linux hostname 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux
```

**Common Options:**
- `-s`: Kernel name (Linux)
- `-r`: Kernel release (version)
- `-v`: Kernel version
- `-m`: Machine hardware (x86_64, arm64)
- `-p`: Processor type
- `-i`: Hardware platform
- `-o`: Operating system
- `-a`: All information

---

## 2. hostname - System Hostname

Display or set the system hostname.

```bash
# Show current hostname
hostname

# Show short hostname
hostname -s

# Show fully qualified domain name
hostname -f

# Show IP address
hostname -I

# Show all IP addresses
hostname -i

# Set hostname (temporary)
sudo hostname newhostname

# Show hostname from file
cat /etc/hostname

# Set hostname permanently
sudo hostnamectl set-hostname newhostname

# Show hostnamectl info
hostnamectl status
```

**Common Options:**
- `-s`: Short name
- `-f`: FQDN (fully qualified)
- `-I`: IP addresses
- `-i`: All IP addresses

---

## 3. lscpu - CPU Information

Display detailed CPU architecture information.

```bash
# Show all CPU info
lscpu

# Show only architecture
lscpu | grep Architecture

# Show CPU cores
lscpu | grep -E "^CPU\(s\):"

# Show thread count
lscpu | grep Thread

# Show model name
lscpu | grep "Model name"

# Show CPU MHz
lscpu | grep MHz

# Show cache info
lscpu | grep -i cache

# Output in JSON format
lscpu -J

# Output in parseable format
lscpu -p
```

**Key Information:**
- Architecture (x86_64, ARM)
- CPU cores and threads
- Model name and vendor
- CPU speed (MHz)
- Cache sizes (L1, L2, L3)
- Byte order (endianness)

---

## 4. free - Memory Usage

Display physical and swap memory usage.

```bash
# Show memory usage
free

# Show in human-readable format
free -h

# Show in megabytes
free -m

# Show in kilobytes
free -k

# Show in bytes
free -b

# Show total column
free -t

# Show low/high info
free -l

# Continuous monitoring (1 second interval)
free -h -s 1

# Show once after delay
free -h -S 3
```

**Understanding Output:**
```
              total        used        free      shared     buff/cache   available
Mem:           7.7G        2.1G        3.2G        156M        2.4G        5.1G
Swap:          2.0G          0B        2.0G

- total: Total memory
- used: Currently in use
- free: Completely unused
- shared: Used by tmpfs
- buff/cache: Filesystem buffers
- available: Available for applications
```

---

## 5. top/htop - System Monitor

Display real-time system and process information.

```bash
# Start top
top

# Show specific user
top -u username

# Sort by CPU
top (then press P)

# Sort by memory
top (then press M)

# Set refresh delay
top -d 2

# Start htop (if installed)
htop

# htop with specific user
htop -u username

# htop sorted by memory
htop --sort-key=PERCENT_MEM
```

**Key Metrics in top:**
- Load average (1, 5, 15 min)
- Tasks (running, sleeping, stopped)
- CPU usage (%us user, %sy system, %id idle)
- Memory (total, used, free, buffers)
- Swap usage

---

## 6. uptime - System Uptime

Show how long system has been running.

```bash
# Show uptime
uptime

# Show only uptime
uptime -p

# Show since boot time
uptime -s

# Show short format
uptime -r
```

**Example Output:**
```
10:30:45 up 15 days, 3:22, 2 users, load average: 0.52, 0.48, 0.43

- Current time: 10:30:45
- Uptime: 15 days, 3:22
- Users logged in: 2
- Load average: 0.52, 0.48, 0.43 (1, 5, 15 min)
```

---

## 7. dmidecode - Hardware Information

Display hardware components from DMI table.

```bash
# Show all hardware info
sudo dmidecode

# Show BIOS info
sudo dmidecode -t bios

# Show system info
sudo dmidecode -t system

# Show motherboard info
sudo dmidecode -t baseboard

# Show processor info
sudo dmidecode -t processor

# Show memory info
sudo dmidecode -t memory

# Show specific type by number
sudo dmidecode -t 1    # System
sudo dmidecode -t 4    # Processor
sudo dmidecode -t 17   # Memory devices

# Show keywords
sudo dmidecode --keywords
```

**Common Types:**
- `0`: BIOS
- `1`: System
- `2`: Baseboard
- `4`: Processor
- `16`: Physical memory array
- `17`: Memory device

---

## 8. lspci - PCI Devices

List PCI devices and hardware components.

```bash
# List all PCI devices
lspci

# Verbose output
lspci -v

# Very verbose
lspci -vv

# Show numeric IDs
lspci -n

# Show numeric IDs (verbose)
lspci -nn

# Show kernel drivers
lspci -k

# Show only specific class
lspci | grep -i vga
lspci | grep -i audio
lspci | grep -i network

# Show device tree
lspci -t

# Machine-readable output
lspci -m
```

**Common Device Classes:**
- VGA compatible controller (graphics)
- Ethernet controller (network)
- Audio device
- USB controller
- SATA controller

---

## 9. lsusb - USB Devices

List USB devices connected to system.

```bash
# List all USB devices
lsusb

# Verbose output
lsusb -v

# Show specific bus
lsusb -b 1

# Show specific device
lsusb -d 1234:5678

# Show device tree
lsusb -t

# Show speed and device info
lsusb -v | grep -E "Bus|ID|Speed"
```

**Example Output:**
```
Bus 001 Device 002: ID 8087:8000 Intel Corp.
│    │    │    │    └── Device ID
│    │    │    └── Vendor ID
│    │    └── Device number
│    └── Bus number
└── USB bus
```

---

## 10. inxi - System Information Tool

Comprehensive system information display.

```bash
# Install inxi
sudo apt install inxi

# Show full system info
inxi -F

# Show CPU info
inxi -C

# Show memory info
inxi -m

# Show disk info
inxi -D

# Show network info
inxi -N

# Show audio info
inxi -A

# Show sensors (temp, fans)
inxi -s

# Show full output
inxi -Fxz

# Show in wide format
inxi -W
```

**Common Options:**
- `-F`: Full output
- `-C`: CPU
- `-m`: Memory
- `-D`: Disks
- `-N`: Network
- `-A`: Audio
- `-s`: Sensors
- `-x`: Extra info
- `-z`: Hide sensitive data

---

## Practical Examples

### System Information Report

```bash
#!/bin/bash
# system_report.sh

echo "=== System Information Report ==="
echo "Date: $(date)"
echo ""

echo "=== Hostname ==="
hostname -f
echo ""

echo "=== Kernel ==="
uname -a
echo ""

echo "=== CPU ==="
lscpu | grep -E "Model name|CPU\(s\)|Architecture"
echo ""

echo "=== Memory ==="
free -h
echo ""

echo "=== Disk ==="
df -h /
echo ""

echo "=== Uptime ==="
uptime -p
```

### Hardware Inventory Script

```bash
#!/bin/bash
# hardware_inventory.sh

OUTPUT="hardware_$(date +%Y%m%d).txt"

{
    echo "=== HARDWARE INVENTORY ==="
    echo "Date: $(date)"
    echo ""

    echo "=== SYSTEM ==="
    sudo dmidecode -t system | grep -E "Product|Serial|UUID"
    echo ""

    echo "=== CPU ==="
    lscpu | grep -E "Architecture|Model name|CPU\(s\)"
    echo ""

    echo "=== MEMORY ==="
    sudo dmidecode -t memory | grep -E "Size|Type|Speed" | head -20
    echo ""

    echo "=== DISKS ==="
    lsblk -o NAME,SIZE,TYPE,MOUNTPOINT
    echo ""

    echo "=== NETWORK ==="
    lspci | grep -i network
    ip addr show | grep -E "inet|link"

} > "$OUTPUT"

echo "Inventory saved to $OUTPUT"
```

### Monitor System Resources

```bash
# Watch memory usage
watch -n 1 free -h

# Watch CPU temperature (if sensors available)
watch -n 2 sensors

# Watch disk usage
watch -n 5 df -h

# Watch network connections
watch -n 2 'ss -tulpn | head -20'

# Combined monitoring
watch -n 1 'echo "=== Memory ==="; free -h; echo ""; echo "=== CPU Load ==="; uptime'
```

### Check System Health

```bash
#!/bin/bash
# health_check.sh

echo "=== System Health Check ==="
echo ""

# Check uptime
echo "Uptime: $(uptime -p)"

# Check load average
LOAD=$(cat /proc/loadavg | awk '{print $1}')
echo "Load Average: $LOAD"

# Check memory
MEM_USED=$(free | grep Mem | awk '{printf("%.0f", $3/$2 * 100.0)}')
echo "Memory Usage: ${MEM_USED}%"

# Check disk
DISK_USED=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
echo "Disk Usage: ${DISK_USED}%"

# Alerts
if [ "$MEM_USED" -gt 90 ]; then
    echo "WARNING: Memory usage above 90%!"
fi

if [ "$DISK_USED" -gt 90 ]; then
    echo "WARNING: Disk usage above 90%!"
fi
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| uname | Kernel info | `uname -a` |
| hostname | System name | `hostname -f` |
| lscpu | CPU details | `lscpu` |
| free | Memory usage | `free -h` |
| top/htop | System monitor | `top` |
| uptime | System uptime | `uptime -p` |
| dmidecode | Hardware info | `dmidecode -t system` |
| lspci | PCI devices | `lspci -v` |
| lsusb | USB devices | `lsusb -v` |
| inxi | Full system info | `inxi -F` |

---

## Conclusion

These 10 system information commands enable you to:

- Identify hardware components
- Monitor system resources
- Troubleshoot performance issues
- Document system configuration
- Verify system specifications

Master these commands for effective system administration and troubleshooting.

---

**Related Articles:**
- [Linux Process Management Commands](linux-process-commands.html)
- [Linux Disk Management Commands](linux-disk-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
