# Essential Linux User and Group Management Commands

## Introduction

User and group management is a fundamental skill for every Linux system administrator. Proper user management ensures system security, resource allocation, and access control. This guide covers 10 essential commands for managing users and groups in Linux.

---

## 1. useradd - Create New Users

The `useradd` command creates new user accounts with specified options.

```bash
# Create a basic user
sudo useradd john

# Create user with home directory and bash shell
sudo useradd -m -s /bin/bash john

# Create user with specific UID and primary group
sudo useradd -u 1500 -g developers john

# Create user with custom home directory
sudo useradd -m -d /home/johnny -s /bin/bash john

# Create system user (no login, no home)
sudo useradd -r -s /sbin/nologin service_account
```

**Common Options:**
- `-m`: Create home directory
- `-s`: Specify login shell
- `-u`: Set user ID
- `-g`: Set primary group
- `-G`: Add to supplementary groups
- `-c`: Add comment/description
- `-e`: Set account expiration date
- `-r`: Create system account

---

## 2. userdel - Delete Users

Remove user accounts from the system.

```bash
# Delete user (keep home directory)
sudo userdel john

# Delete user and remove home directory
sudo userdel -r john

# Force deletion even if user is logged in
sudo userdel -f john
```

**Common Options:**
- `-r`: Remove home directory and mail spool
- `-f`: Force deletion

---

## 3. usermod - Modify Users

Modify existing user account properties.

```bash
# Change user's login shell
sudo usermod -s /bin/zsh john

# Add user to supplementary group
sudo usermod -aG sudo john

# Change user's home directory
sudo usermod -d /new/home -m john

# Lock user account
sudo usermod -L john

# Unlock user account
sudo usermod -U john

# Set account expiration date
sudo usermod -e 2026-12-31 john
```

**Common Options:**
- `-aG`: Append to supplementary groups (use with -G)
- `-s`: Change login shell
- `-d`: Change home directory
- `-m`: Move home directory content
- `-L`: Lock account
- `-U`: Unlock account
- `-e`: Set expiration date (YYYY-MM-DD)

---

## 4. groupadd - Create Groups

Create new user groups for organizing users and managing permissions.

```bash
# Create basic group
sudo groupadd developers

# Create group with specific GID
sudo groupadd -g 2000 developers

# Create system group
sudo groupadd -r sysadmins

# Create group with custom password
sudo groupadd -p encrypted_password developers
```

**Common Options:**
- `-g`: Set group ID
- `-r`: Create system group
- `-f`: Force creation (silently exit if exists)

---

## 5. groupdel - Delete Groups

Remove groups from the system.

```bash
# Delete a group
sudo groupdel developers

# Delete group even if it's primary group of some user
sudo groupdel -f developers
```

**Note:** Cannot delete a group that is the primary group of any user.

---

## 6. groupmod - Modify Groups

Modify existing group properties.

```bash
# Change group name
sudo groupmod -n devs developers

# Change group GID
sudo groupmod -g 2500 developers
```

**Common Options:**
- `-n`: Rename group
- `-g`: Change GID

---

## 7. passwd - Manage Passwords

Set or change user passwords.

```bash
# Change own password
passwd

# Change another user's password (root required)
sudo passwd john

# Set password to expire immediately
sudo passwd -e john

# Lock account
sudo passwd -l john

# Unlock account
sudo passwd -U john

# Delete password (make account passwordless)
sudo passwd -d john

# Show password status
sudo passwd -S john
```

**Common Options:**
- `-e`: Force password change on next login
- `-l`: Lock account
- `-U`: Unlock account
- `-d`: Remove password
- `-S`: Show status

---

## 8. id - Display User and Group Information

Show user and group IDs and memberships.

```bash
# Show current user info
id

# Show specific user info
id john

# Show only UID
id -u john

# Show only GID
id -g john

# Show all group IDs
id -G john

# Show groups as names only
id -Gn john
```

**Common Options:**
- `-u`: Print only UID
- `-g`: Print only GID
- `-G`: Print all group IDs
- `-n`: Print names instead of numbers

---

## 9. who - Show Logged-in Users

Display information about currently logged-in users.

```bash
# Show all logged in users
who

# Show detailed information
who -a

# Show login time for each user
who -b

# Show dead processes
who -d

# Show only hostname
who -i
```

**Common Options:**
- `-a`: All information
- `-b`: Last system boot
- `-d`: Dead processes
- `-i`: Idle time

---

## 10. last - Show Login History

Display a list of last logged-in users.

```bash
# Show login history
last

# Show last 10 entries
last -n 10

# Show logins for specific user
last john

# Show reboot history
last reboot

# Show login time with timestamps
last -F
```

**Common Options:**
- `-n`: Number of entries
- `-F`: Show full date and time
- `reboot`: Show system reboots

---

## Practical Examples

### Create a Developer User with Full Setup

```bash
# Create group
sudo groupadd developers

# Create user with home, shell, and add to groups
sudo useradd -m -s /bin/bash -G developers,sudo john

# Set password
sudo passwd john

# Verify
id john
```

### Bulk User Creation Script

```bash
#!/bin/bash
# create_users.sh

for user in alice bob charlie; do
    sudo useradd -m -s /bin/bash -G developers $user
    echo "$user created"
done
```

### Disable a User Account

```bash
# Lock the account
sudo usermod -L john

# Kill all user processes
sudo pkill -u john

# Remove from cron
sudo crontab -u john -r

# Optional: remove from system (keep home for backup)
sudo userdel john
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| useradd | Create user | `useradd -m john` |
| userdel | Delete user | `userdel -r john` |
| usermod | Modify user | `usermod -aG sudo john` |
| groupadd | Create group | `groupadd developers` |
| groupdel | Delete group | `groupdel developers` |
| groupmod | Modify group | `groupmod -n devs developers` |
| passwd | Manage password | `passwd john` |
| id | Show user info | `id john` |
| who | Logged users | `who -a` |
| last | Login history | `last john` |

---

## Conclusion

Mastering user and group management commands is essential for Linux system administration. These 10 commands provide the foundation for:

- Creating and managing user accounts
- Organizing users into groups
- Controlling access and permissions
- Monitoring user activity
- Maintaining system security

Remember to always use `sudo` for administrative commands and verify changes with `id` or `getent` commands.

---

**Related Articles:**
- [Linux Permission Management Commands](linux-permission-commands.html)
- [Linux Process Management Commands](linux-process-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
