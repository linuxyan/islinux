# Essential Linux Disk and Storage Management Commands

## Introduction

Disk and storage management is crucial for maintaining system health, optimizing performance, and preventing data loss. From monitoring disk usage to managing partitions and filesystems, these commands help you effectively manage storage resources. This guide covers 10 essential disk management commands.

---

## 1. df - Disk Space Usage

Display disk space usage for filesystems.

```bash
# Show disk usage for all filesystems
df

# Show in human-readable format
df -h

# Show specific filesystem
df -h /home

# Show inode usage
df -i

# Show filesystem type
df -T

# Show total usage
df -h --total

# Show only local filesystems
df -hT -t ext4

# Exclude specific types
df -hT -x tmpfs -x devtmpfs
```

**Common Options:**
- `-h`: Human-readable (KB, MB, GB)
- `-i`: Inode usage
- `-T`: Filesystem type
- `--total`: Include total
- `-t`: Include specific type
- `-x`: Exclude specific type

---

## 2. du - Disk Usage by Directory

Estimate file and directory space usage.

```bash
# Show directory sizes
du -sh /home/*

# Show all files and directories
du -ah /var/log

# Show only total for directory
du -sh /var/log

# Show top 10 largest directories
du -h --max-depth=1 / | sort -hr | head -10

# Show files larger than 100MB
du -h /home | grep -E "^[0-9.]+[GM]"

# Show inode usage
du -in /home

# Exclude specific patterns
du -h --exclude='*.log' /var
```

**Common Options:**
- `-s`: Summary (total only)
- `-h`: Human-readable
- `-a`: All files
- `--max-depth=N`: Limit depth
- `-i`: Inode usage

---

## 3. lsblk - List Block Devices

Display information about block devices.

```bash
# List all block devices
lsblk

# Show filesystem type
lsblk -f

# Show all devices including empty
lsblk -a

# Show device size and mount point
lsblk -o NAME,SIZE,MOUNTPOINT

# Show UUID and LABEL
lsblk -o NAME,UUID,LABEL,SIZE

# Show filesystem information
lsblk -fs

# Show in tree format
lsblk -t

# Show owner and permissions
lsblk -o NAME,OWNER,MODE,SIZE
```

**Common Options:**
- `-f`: Filesystem info
- `-a`: All devices
- `-o`: Custom output columns
- `-t`: Topology info
- `-s`: Dependency tree

---

## 4. fdisk - Partition Table Manipulator

View and modify disk partitions.

```bash
# List all partitions
sudo fdisk -l

# List specific disk
sudo fdisk -l /dev/sda

# Open disk for editing
sudo fdisk /dev/sda

# Inside fdisk interactive mode:
# p - Print partition table
# n - New partition
# d - Delete partition
# w - Write changes
# q - Quit without saving
# m - Help menu
```

**Common Commands (interactive):**
- `p`: Print partition table
- `n`: Create new partition
- `d`: Delete partition
- `t`: Change partition type
- `w`: Write and exit
- `q`: Quit without saving
- `m`: Show help

**WARNING:** fdisk modifies disk partitions. Use with caution!

---

## 5. mkfs - Create Filesystem

Format a partition with a filesystem.

```bash
# Create ext4 filesystem
sudo mkfs.ext4 /dev/sdb1

# Create ext3 filesystem
sudo mkfs.ext3 /dev/sdb1

# Create XFS filesystem
sudo mkfs.xfs /dev/sdb1

# Create with label
sudo mkfs.ext4 -L data /dev/sdb1

# Create with UUID
sudo mkfs.ext4 -U $(uuidgen) /dev/sdb1

# Check for bad blocks
sudo mkfs.ext4 -c /dev/sdb1

# Force creation
sudo mkfs.ext4 -F /dev/sdb1
```

**Common Filesystem Types:**
- `ext4`: Default for most Linux distributions
- `ext3`: Older, journaled
- `xfs`: High-performance, scalable
- `btrfs`: Advanced features, snapshots
- `vfat`: FAT32, compatible with Windows
- `ntfs`: Windows NTFS

---

## 6. mount - Mount Filesystems

Mount filesystems to directory locations.

```bash
# Mount a device
sudo mount /dev/sdb1 /mnt/data

# Mount with filesystem type
sudo mount -t ext4 /dev/sdb1 /mnt/data

# Mount read-only
sudo mount -o ro /dev/sdb1 /mnt/data

# Remount with different options
sudo mount -o remount,rw /mnt/data

# Mount ISO image
sudo mount -o loop image.iso /mnt/iso

# Show all mounts
mount

# Show specific mount
mount | grep /mnt

# Auto-mount from /etc/fstab
sudo mount -a

# Bind mount directory
sudo mount --bind /old/path /new/path
```

**Common Options:**
- `-t`: Filesystem type
- `-o`: Mount options
- `-r`: Read-only
- `-w`: Read-write
- `--bind`: Bind mount
- `-a`: Mount all from fstab

---

## 7. umount - Unmount Filesystems

Safely unmount filesystems.

```bash
# Unmount by mount point
sudo umount /mnt/data

# Unmount by device
sudo umount /dev/sdb1

# Lazy unmount (detach immediately)
sudo umount -l /mnt/data

# Force unmount
sudo umount -f /mnt/data

# Unmount all by type
sudo umount -a -t nfs

# Verbose unmount
sudo umount -v /mnt/data
```

**Common Options:**
- `-l`: Lazy unmount
- `-f`: Force unmount
- `-a`: Unmount all
- `-v`: Verbose output

**Note:** Ensure no processes are using the mount point before unmounting.

---

## 8. fsck - Filesystem Check

Check and repair filesystem errors.

```bash
# Check filesystem (auto-fix)
sudo fsck -y /dev/sdb1

# Check ext4 filesystem
sudo fsck.ext4 /dev/sdb1

# Check with interactive repair
sudo fsck -r /dev/sdb1

# Check all filesystems in fstab
sudo fsck -A

# Check only if dirty
sudo fsck -a /dev/sdb1

# Force check even if clean
sudo fsck -f /dev/sdb1

# Check with verbose output
sudo fsck -v /dev/sdb1
```

**Common Options:**
- `-y`: Auto-answer yes to repairs
- `-a`: Auto repair
- `-r`: Interactive repair
- `-f`: Force check
- `-A`: Check all fstab entries
- `-v`: Verbose output

**WARNING:** Never run fsck on mounted filesystems!

---

## 9. smartctl - SMART Disk Health

Monitor disk health using SMART data.

```bash
# Install smartmontools
sudo apt install smartmontools

# Check disk health
sudo smartctl -H /dev/sda

# Show all SMART info
sudo smartctl -a /dev/sda

# Run short self-test
sudo smartctl -t short /dev/sda

# Run long self-test
sudo smartctl -t long /dev/sda

# View test results
sudo smartctl -l selftest /dev/sda

# Enable SMART
sudo smartctl -s on /dev/sda

# Show error log
sudo smartctl -l error /dev/sda
```

**Common Options:**
- `-H`: Health status
- `-a`: All information
- `-t`: Run self-test
- `-l`: Show log
- `-s`: Enable/disable SMART

---

## 10. lsof - List Open Files

List open files and processes using them.

```bash
# Show all open files
lsof

# Show files in specific directory
lsof +D /var/log

# Show files by user
lsof -u john

# Show network connections
lsof -i

# Show TCP connections
lsof -i tcp

# Show processes using port
lsof -i :80

# Show files by process ID
lsof -p 1234

# Show files by command
lsof -c nginx

# Show deleted files still open
lsof | grep deleted

# Show files on specific mount
lsof /mnt/data
```

**Common Options:**
- `-i`: Network files
- `-u`: By user
- `-p`: By PID
- `-c`: By command
- `+D`: Directory recurse

---

## Practical Examples

### Find Large Files and Directories

```bash
# Find directories using most space
du -h --max-depth=1 / | sort -hr | head -10

# Find files larger than 1GB
find / -type f -size +1G -exec ls -lh {} \;

# Find files not accessed in 30 days
find /home -type f -atime +30 -size +100M

# Clean old log files
find /var/log -name "*.log" -mtime +30 -delete
```

### Disk Space Alert Script

```bash
#!/bin/bash
# disk_monitor.sh

THRESHOLD=80
EMAIL="admin@example.com"

USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ $USAGE -ge $THRESHOLD ]; then
    echo "Disk usage is at ${USAGE}%" | \
    mail -s "Disk Alert: ${USAGE}%" $EMAIL
fi
```

### Mount New Disk

```bash
# List disks
lsblk

# Create partition
sudo fdisk /dev/sdb
# n (new), p (primary), 1 (number), Enter (default start), Enter (default end)
# w (write)

# Format disk
sudo mkfs.ext4 -L data /dev/sdb1

# Create mount point
sudo mkdir /mnt/data

# Mount disk
sudo mount /dev/sdb1 /mnt/data

# Add to fstab for auto-mount
echo "LABEL=data /mnt/data ext4 defaults 0 2" | \
sudo tee -a /etc/fstab

# Verify
df -h
```

### Check Disk Health

```bash
# Check all disks health
for disk in /dev/sd[a-z]; do
    echo "=== $disk ==="
    sudo smartctl -H $disk 2>/dev/null
done

# View detailed info for specific disk
sudo smartctl -a /dev/sda

# Schedule regular checks
sudo systemctl enable smartmontools
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| df | Disk usage | `df -h` |
| du | Directory size | `du -sh /home` |
| lsblk | List block devices | `lsblk -f` |
| fdisk | Partition tool | `fdisk -l` |
| mkfs | Create filesystem | `mkfs.ext4 /dev/sda1` |
| mount | Mount filesystem | `mount /dev/sda1 /mnt` |
| umount | Unmount filesystem | `umount /mnt` |
| fsck | Check filesystem | `fsck -y /dev/sda1` |
| smartctl | Disk health | `smartctl -a /dev/sda` |
| lsof | Open files | `lsof -i :80` |

---

## Conclusion

These 10 disk management commands enable you to:

- Monitor disk space usage
- Manage partitions and filesystems
- Mount and unmount storage devices
- Check and repair filesystem errors
- Monitor disk health with SMART
- Identify open files and processes

Master these commands to effectively manage storage and maintain system health.

---

**Related Articles:**
- [Linux System Information Commands](linux-system-info-commands.html)
- [Linux Process Management Commands](linux-process-commands.html)
- [Singapore VPS Review](vps-singapore-review.html)
