# Essential Linux Permission Management Commands

## Introduction

Linux file permissions are a core security feature that controls access to files and directories. Understanding and managing permissions is crucial for system security and proper file sharing. This guide covers 10 essential commands for permission management.

---

## 1. chmod - Change File Permissions

Modify file and directory access permissions.

```bash
# Symbolic mode examples
chmod u+x script.sh           # Add execute for owner
chmod g-w file.txt            # Remove write for group
chmod o=r file.txt            # Set read-only for others
chmod a+x script.sh           # Add execute for all
chmod u=rwx,g=rx,o=r file     # Set all permissions

# Numeric mode examples
chmod 755 script.sh           # rwxr-xr-x
chmod 644 file.txt            # rw-r--r--
chmod 600 secret.txt          # rw-------
chmod 777 public.txt          # rwxrwxrwx (use carefully!)
chmod 4755 setuid_program     # Set UID bit

# Recursive change
chmod -R 755 directory/

# Verbose output
chmod -v 644 file.txt
```

**Permission Values:**
- `4` = read (r)
- `2` = write (w)
- `1` = execute (x)
- `0` = no permission

**Special Permission Bits:**
- `4000` = SetUID (execute as owner)
- `2000` = SetGID (execute as group)
- `1000` = Sticky bit (only owner can delete)

---

## 2. chown - Change File Ownership

Change file and directory ownership.

```bash
# Change owner only
chown john file.txt

# Change owner and group
chown john:developers file.txt

# Change group only
chown :developers file.txt

# Recursive change
chown -R john:developers /var/www/

# Change from specific user (useful for scripts)
chown --from=olduser newuser file.txt

# Verbose output
chown -v john:developers file.txt

# Change symlinks instead of targets
chown -h john symlink
```

**Common Options:**
- `-R`: Recursive
- `-v`: Verbose
- `-h`: Affect symlinks
- `--from`: Change only if current owner matches

---

## 3. chgrp - Change Group Ownership

Change the group ownership of files.

```bash
# Change group
chgrp developers file.txt

# Recursive change
chgrp -R developers /var/www/

# Change to match reference file
chgrp --reference=ref.txt target.txt

# Verbose output
chgrp -v developers file.txt

# Change symlinks
chgrp -h developers symlink
```

**Common Options:**
- `-R`: Recursive
- `-v`: Verbose
- `-h`: Affect symlinks
- `--reference`: Use reference file's group

---

## 4. umask - Set Default Permissions

Control default permissions for new files.

```bash
# Show current umask
umask

# Show symbolic umask
umask -S

# Set umask (affects new files)
umask 022    # Default: files 644, dirs 755
umask 002    # Default: files 664, dirs 775
umask 077    # Default: files 600, dirs 700

# Set in shell profile for all sessions
echo "umask 022" >> ~/.bashrc
```

**Understanding umask:**
- `022`: Files created as 644 (rw-r--r--)
- `002`: Files created as 664 (rw-rw-r--)
- `077`: Files created as 600 (rw-------)

**Calculation:**
- Files: 666 - umask = permissions
- Directories: 777 - umask = permissions

---

## 5. ls -l - View Permissions

Display file permissions in long format.

```bash
# Show permissions
ls -l file.txt

# Show numeric permissions
ls -l --numeric-uid-gid file.txt

# Show directory permissions
ls -ld directory/

# Show all files with permissions
ls -la

# Show human-readable sizes
ls -lh
```

**Understanding Output:**
```
-rwxr-xr-x 1 john developers 4096 Mar 14 10:00 script.sh
││││││││││  │   │          │     │          │
││││││││││  │   │          │     │          └── Filename
││││││││││  │   │          │     └── Modification date
││││││││││  │   │          └── File size
││││││││││  │   └── Group owner
││││││││││  └── Owner
│││││││││└── Others (r-x)
││││││││└── Group (r-x)
│││││││└── Owner (rwx)
││││││└── Special bits
│││││└── Sticky bit
││││└── Group setgid
│││└── User setuid
││└── File type (-=file, d=dir, l=symlink)
└── File type indicator
```

---

## 6. stat - Display File Status

Show detailed file information including permissions.

```bash
# Show all file info
stat file.txt

# Show only permissions
stat -c "%a" file.txt

# Show permission in symbolic form
stat -c "%A" file.txt

# Show owner
stat -c "%U" file.txt

# Show group
stat -c "%G" file.txt

# Show inode number
stat -c "%i" file.txt

# Show multiple info
stat -c "Perms: %a, Owner: %U, Group: %G" file.txt
```

**Common Format Codes:**
- `%a`: Access rights (octal)
- `%A`: Access rights (symbolic)
- `%U`: Owner name
- `%G`: Group name
- `%u`: Owner ID
- `%g`: Group ID
- `%i`: Inode number

---

## 7. sudo - Execute as Superuser

Run commands with elevated privileges.

```bash
# Run single command as root
sudo systemctl restart nginx

# Run as different user
sudo -u postgres psql

# Edit file as root
sudo vim /etc/hosts

# Run with preserved environment
sudo -E command

# List allowed commands
sudo -l

# Reset timestamp (force password on next sudo)
sudo -k

# Run interactive root shell
sudo -i
```

**Common Options:**
- `-u`: Run as specified user
- `-i`: Interactive root shell
- `-l`: List permissions
- `-k`: Reset timestamp
- `-E`: Preserve environment

---

## 8. su - Switch User

Switch to another user account.

```bash
# Switch to root
su

# Switch to specific user
su john

# Switch with login shell
su - john

# Run command as another user
su - john -c "whoami"

# Specify shell
su -s /bin/bash john
```

**Common Options:**
- `-`: Login shell (load user's environment)
- `-c`: Run command
- `-s`: Specify shell

**Difference from sudo:**
- `su`: Switch user (need target user's password)
- `sudo`: Run as root (need your password)

---

## 9. getfacl - Get File ACL

View Access Control Lists for detailed permissions.

```bash
# View ACL
getfacl file.txt

# View directory ACL
getfacl -d directory/

# View with path names
getfacl -p file.txt

# Save ACL to file
getfacl file.txt > acl.txt

# View multiple files
getfacl file1.txt file2.txt
```

**Common Options:**
- `-d`: Default ACL (directories)
- `-p`: Don't strip path prefix
- `-R`: Recursive

---

## 10. setfacl - Set File ACL

Set Access Control Lists for granular permissions.

```bash
# Give user read-write access
setfacl -m u:john:rw file.txt

# Give group read access
setfacl -m g:developers:r file.txt

# Remove ACL entry
setfacl -x u:john file.txt

# Remove all ACL entries
setfacl -b file.txt

# Set default ACL for directory
setfacl -d -m u:john:rwx /shared/

# Recursive ACL
setfacl -R -m u:john:rw /shared/

# Copy ACL from one file to another
getfacl source.txt | setfacl --set-file=- target.txt
```

**Common Options:**
- `-m`: Modify ACL
- `-x`: Remove ACL entry
- `-b`: Remove all ACL
- `-d`: Default ACL
- `-R`: Recursive
- `--set-file`: Set from file

---

## Practical Examples

### Secure Web Directory Setup

```bash
# Create web directory
sudo mkdir -p /var/www/myapp

# Set ownership
sudo chown -R www-data:www-data /var/www/myapp

# Set permissions (directories 755, files 644)
sudo find /var/www/myapp -type d -exec chmod 755 {} \;
sudo find /var/www/myapp -type f -exec chmod 644 {} \;

# Set special permissions for uploads
sudo mkdir /var/www/myapp/uploads
sudo chmod 777 /var/www/myapp/uploads
```

### Secure SSH Keys

```bash
# Create .ssh directory
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Set proper permissions for keys
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 644 ~/.ssh/authorized_keys

# Set ownership
chown -R $USER:$USER ~/.ssh
```

### Shared Team Directory

```bash
# Create shared directory
sudo mkdir /shared/team

# Create group
sudo groupadd team

# Set group ownership
sudo chgrp team /shared/team

# Set permissions with setgid
sudo chmod 2775 /shared/team

# Set default ACL for new files
sudo setfacl -d -m g::rwx /shared/team
```

### Secure Configuration File

```bash
# Create config with restricted access
touch config.ini
chmod 600 config.ini
chown appuser:appuser config.ini

# Verify
stat -c "%a %U:%G %n" config.ini
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| chmod | Change permissions | `chmod 755 file` |
| chown | Change ownership | `chown user:group file` |
| chgrp | Change group | `chgrp group file` |
| umask | Default permissions | `umask 022` |
| ls -l | View permissions | `ls -l file` |
| stat | File status | `stat file` |
| sudo | Run as root | `sudo command` |
| su | Switch user | `su - user` |
| getfacl | Get ACL | `getfacl file` |
| setfacl | Set ACL | `setfacl -m u:user:rw file` |

---

## Permission Best Practices

1. **Principle of Least Privilege**: Grant minimum necessary permissions
2. **Use Groups**: Manage access through groups, not individual users
3. **Regular Audits**: Periodically review permissions with `ls -l` and `getfacl`
4. **Secure Defaults**: Use `umask 022` or stricter
5. **Avoid 777**: Never use `chmod 777` except in rare cases
6. **SetUID Caution**: Only set SetUID on trusted programs
7. **Home Directory Security**: Keep home directories at 700 or 750

---

## Conclusion

These 10 permission management commands are essential for:

- Controlling file and directory access
- Managing ownership and groups
- Setting secure defaults
- Implementing granular access with ACLs
- Executing privileged operations safely

Master these commands to maintain a secure and well-organized Linux system.

---

**Related Articles:**
- [Linux User Management Commands](linux-user-management-commands.html)
- [Linux File and Directory Commands](linux-file-directory-commands.html)
- [Singapore VPS Security Guide](vps-singapore-review.html)
