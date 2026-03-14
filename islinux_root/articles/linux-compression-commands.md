# Essential Linux Compression and Archive Commands

## Introduction

Compression and archiving are essential tasks for backup, file transfer, and storage optimization. Linux provides powerful command-line tools for creating, extracting, and managing compressed archives. This guide covers 10 essential commands for compression and archive management.

---

## 1. tar - Tape Archive

Create and extract archive files (often combined with compression).

```bash
# Create uncompressed archive
tar -cvf archive.tar file1 file2 directory/

# Extract archive
tar -xvf archive.tar

# List archive contents
tar -tvf archive.tar

# Create gzip compressed archive
tar -czvf archive.tar.gz directory/

# Extract gzip archive
tar -xzvf archive.tar.gz

# Create bzip2 compressed archive
tar -cjvf archive.tar.bz2 directory/

# Extract bzip2 archive
tar -xjvf archive.tar.bz2

# Create xz compressed archive
tar -cJvf archive.tar.xz directory/

# Extract xz archive
tar -xJvf archive.tar.xz

# Extract to specific directory
tar -xzvf archive.tar.gz -C /destination/

# Extract specific files
tar -xzvf archive.tar.gz file1.txt file2.txt

# Add files to existing archive
tar -rvf archive.tar newfile.txt
```

**Common Options:**
- `-c`: Create archive
- `-x`: Extract archive
- `-t`: List contents
- `-v`: Verbose output
- `-f`: Filename
- `-z`: gzip compression
- `-j`: bzip2 compression
- `-J`: xz compression
- `-r`: Append files
- `-C`: Extract to directory

---

## 2. gzip - GNU Zip Compression

Compress and decompress files using gzip algorithm.

```bash
# Compress file (replaces original)
gzip file.txt

# Compress keeping original
gzip -k file.txt

# Decompress
gzip -d file.txt.gz

# Decompress keeping .gz
gzip -dk file.txt.gz

# Set compression level (1-9, default 6)
gzip -9 file.txt        # Maximum compression
gzip -1 file.txt        # Fastest compression

# Show compression ratio
gzip -l file.txt.gz

# Compress multiple files
gzip file1.txt file2.txt file3.txt

# Recursive compression
gzip -r directory/
```

**Common Options:**
- `-d`: Decompress
- `-k`: Keep original
- `-l`: List info
- `-r`: Recursive
- `-1` to `-9`: Compression level

---

## 3. gunzip - Decompress gzip Files

Decompress files compressed with gzip.

```bash
# Decompress file
gunzip file.txt.gz

# Decompress keeping original .gz
gunzip -k file.txt.gz

# Decompress to stdout
gunzip -c file.txt.gz > file.txt

# Test integrity without decompressing
gunzip -t file.txt.gz

# Force decompress (overwrite)
gunzip -f file.txt.gz

# Decompress multiple files
gunzip file1.gz file2.gz file3.gz
```

**Common Options:**
- `-k`: Keep original
- `-c`: Output to stdout
- `-t`: Test integrity
- `-f`: Force overwrite

**Note:** `gzip -d` does the same as `gunzip`.

---

## 4. bzip2 - Burrows-Wheeler Compression

Compress files with better ratio than gzip (slower).

```bash
# Compress file
bzip2 file.txt

# Compress keeping original
bzip2 -k file.txt

# Decompress
bzip2 -d file.txt.bz2

# Set compression level (1-9)
bzip2 -9 file.txt       # Maximum compression
bzip2 -1 file.txt       # Fastest compression

# Test integrity
bzip2 -t file.txt.bz2

# Decompress to stdout
bzip2 -dc file.txt.bz2 > file.txt

# Force compression
bzip2 -f file.txt
```

**Common Options:**
- `-d`: Decompress
- `-k`: Keep original
- `-t`: Test integrity
- `-1` to `-9`: Compression level
- `-c`: Output to stdout

---

## 5. bunzip2 - Decompress bzip2 Files

Decompress files compressed with bzip2.

```bash
# Decompress file
bunzip2 file.txt.bz2

# Decompress keeping original
bunzip2 -k file.txt.bz2

# Decompress to stdout
bunzip2 -c file.txt.bz2 > file.txt

# Test integrity
bunzip2 -t file.txt.bz2

# Force decompress
bunzip2 -f file.txt.bz2
```

**Note:** `bzip2 -d` does the same as `bunzip2`.

---

## 6. xz - LZMA Compression

Compress files with best ratio (slowest but most efficient).

```bash
# Compress file
xz file.txt

# Compress keeping original
xz -k file.txt

# Decompress
xz -d file.txt.xz

# Set compression level (0-9)
xz -9 file.txt          # Maximum compression
xz -0 file.txt          # Fastest compression

# Test integrity
xz -t file.txt.xz

# Decompress to stdout
xz -dc file.txt.xz > file.txt

# Show compression info
xz -l file.txt.xz

# Force compression
xz -f file.txt
```

**Common Options:**
- `-d`: Decompress
- `-k`: Keep original
- `-t`: Test integrity
- `-l`: List info
- `-0` to `-9`: Compression level

---

## 7. unxz - Decompress xz Files

Decompress files compressed with xz.

```bash
# Decompress file
unxz file.txt.xz

# Decompress keeping original
unxz -k file.txt.xz

# Decompress to stdout
unxz -c file.txt.xz > file.txt

# Test integrity
unxz -t file.txt.xz

# Force decompress
unxz -f file.txt.xz
```

**Note:** `xz -d` does the same as `unxz`.

---

## 8. zip - Create ZIP Archives

Create ZIP format archives (Windows compatible).

```bash
# Create zip archive
zip archive.zip file1.txt file2.txt

# Add directory recursively
zip -r archive.zip directory/

# Add files to existing archive
zip archive.zip newfile.txt

# Update only newer files
zip -u archive.zip file.txt

# Delete file from archive
zip -d archive.zip file.txt

# List contents
zipinfo archive.zip

# Set compression level (0-9)
zip -9 archive.zip file.txt     # Maximum
zip -0 archive.zip file.txt     # Store only

# Exclude files
zip -r archive.zip directory/ -x "*.log"

# Encrypt with password
zip -e archive.zip file.txt

# Move files to archive (delete originals)
zip -m archive.zip file.txt
```

**Common Options:**
- `-r`: Recursive
- `-u`: Update
- `-d`: Delete from archive
- `-e`: Encrypt
- `-m`: Move (delete originals)
- `-x`: Exclude files

---

## 9. unzip - Extract ZIP Archives

Extract files from ZIP archives.

```bash
# Extract to current directory
unzip archive.zip

# Extract to specific directory
unzip archive.zip -d /destination/

# List contents
unzip -l archive.zip

# Extract specific files
unzip archive.zip file1.txt file2.txt

# Extract with overwrite
unzip -o archive.zip

# Extract without overwrite
unzip -n archive.zip

# Extract matching pattern
unzip archive.zip "*.txt"

# Test integrity
unzip -t archive.zip

# Quiet extraction
unzip -q archive.zip
```

**Common Options:**
- `-d`: Destination directory
- `-l`: List contents
- `-o`: Overwrite
- `-n`: Never overwrite
- `-t`: Test integrity
- `-q`: Quiet mode

---

## 10. 7z - 7-Zip Archive

High compression ratio archive format.

```bash
# Install 7zip
sudo apt install p7zip-full

# Create 7z archive
7z a archive.7z file1.txt directory/

# Extract archive
7z x archive.7z

# Extract to specific directory
7z x archive.7z -o/destination/

# List contents
7z l archive.7z

# Set compression level (0-9)
7z a -m0=copy archive.7z file.txt     # Store
7z a -m9=deflate archive.7z file.txt  # Maximum

# Create self-extracting archive
7z a -sfx archive.sfx file.txt

# Encrypt with password
7z a -p archive.7z file.txt

# Update archive
7z u archive.7z newfile.txt

# Delete from archive
7z d archive.7z file.txt
```

**Common Commands:**
- `a`: Add/create archive
- `x`: Extract with paths
- `e`: Extract without paths
- `l`: List contents
- `t`: Test integrity
- `u`: Update
- `d`: Delete from archive

---

## Practical Examples

### Backup Script with Compression

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
SOURCE_DIR="/home/user/projects"
BACKUP_DIR="/backup"

# Create compressed backup
tar -czf "${BACKUP_DIR}/backup_${DATE}.tar.gz" "$SOURCE_DIR"

# Verify backup
tar -tzf "${BACKUP_DIR}/backup_${DATE}.tar.gz" > /dev/null && \
    echo "Backup successful: backup_${DATE}.tar.gz"
```

### Log Rotation Script

```bash
#!/bin/bash
# log_rotate.sh

LOG_DIR="/var/log/myapp"
ARCHIVE_DIR="/var/log/myapp/archive"

mkdir -p "$ARCHIVE_DIR"

# Compress logs older than 7 days
find "$LOG_DIR" -name "*.log" -mtime +7 -exec gzip {} \;

# Move compressed logs to archive
mv "$LOG_DIR"/*.gz "$ARCHIVE_DIR/"

# Delete archives older than 30 days
find "$ARCHIVE_DIR" -name "*.gz" -mtime +30 -delete

echo "Log rotation completed"
```

### Extract Multiple Archives

```bash
#!/bin/bash
# extract_all.sh

for archive in *.tar.gz; do
    echo "Extracting $archive..."
    tar -xzf "$archive"
done

for archive in *.zip; do
    echo "Extracting $archive..."
    unzip -q "$archive"
done

echo "Extraction complete"
```

### Compare Compression Ratios

```bash
# Create test file
dd if=/dev/zero of=testfile bs=1M count=100

# Test gzip
cp testfile testfile.gz_test
gzip -9 testfile.gz_test
ls -lh testfile.gz_test

# Test bzip2
cp testfile testfile.bz2_test
bzip2 -9 testfile.bz2_test
ls -lh testfile.bz2_test

# Test xz
cp testfile testfile.xz_test
xz -9 testfile.xz_test
ls -lh testfile.xz_test

# Cleanup
rm testfile testfile.gz_test testfile.bz2_test testfile.xz_test
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| tar | Create archives | `tar -czvf archive.tar.gz dir/` |
| gzip | Compress files | `gzip file.txt` |
| gunzip | Decompress gzip | `gunzip file.txt.gz` |
| bzip2 | Bzip2 compression | `bzip2 file.txt` |
| bunzip2 | Decompress bzip2 | `bunzip2 file.txt.bz2` |
| xz | XZ compression | `xz file.txt` |
| unxz | Decompress xz | `unxz file.txt.xz` |
| zip | Create ZIP | `zip -r archive.zip dir/` |
| unzip | Extract ZIP | `unzip archive.zip` |
| 7z | 7-Zip archive | `7z a archive.7z dir/` |

---

## Compression Comparison

| Format | Extension | Compression | Speed | Compatibility |
|--------|-----------|-------------|-------|---------------|
| gzip | .gz | Medium | Fast | Universal |
| bzip2 | .bz2 | High | Medium | Good |
| xz | .xz | Highest | Slow | Good |
| ZIP | .zip | Medium | Fast | Universal |
| 7z | .7z | Very High | Slow | Limited |

---

## Conclusion

These 10 compression and archive commands enable you to:

- Create and extract various archive formats
- Compress files for storage efficiency
- Transfer multiple files as single archive
- Backup data with compression
- Manage disk space effectively

Master these commands for efficient file management and backup operations.

---

**Related Articles:**
- [Linux File and Directory Commands](linux-file-directory-commands.html)
- [Linux Disk Management Commands](linux-disk-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
