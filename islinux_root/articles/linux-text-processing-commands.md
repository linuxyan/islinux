# Essential Linux Text Processing Commands

## Introduction

Text processing is a fundamental skill in Linux, essential for log analysis, data manipulation, configuration management, and automation. This guide covers 10 powerful commands for processing and manipulating text files.

---

## 1. grep - Pattern Search

Search for patterns in files using regular expressions.

```bash
# Basic search
grep "error" file.txt

# Case-insensitive search
grep -i "error" file.txt

# Invert match (lines without pattern)
grep -v "debug" file.txt

# Show line numbers
grep -n "error" file.txt

# Count matches
grep -c "error" file.txt

# Show context (3 lines before and after)
grep -C 3 "error" file.txt

# Show lines before match
grep -B 5 "error" file.txt

# Show lines after match
grep -A 5 "error" file.txt

# Recursive search in directory
grep -r "function" /home/user/

# Show only filenames
grep -l "error" *.log

# Extended regex
grep -E "error|warning" file.txt

# Word match only
grep -w "root" file.txt

# Ignore binary files
grep -a "pattern" file.txt
```

**Common Options:**
- `-i`: Case-insensitive
- `-v`: Invert match
- `-n`: Line numbers
- `-c`: Count matches
- `-r`: Recursive
- `-l`: Files with matches
- `-C`: Context lines
- `-B`: Lines before
- `-A`: Lines after
- `-E`: Extended regex
- `-w`: Word match

---

## 2. sed - Stream Editor

Edit and transform text streams.

```bash
# Replace first occurrence on each line
sed 's/old/new/' file.txt

# Replace all occurrences
sed 's/old/new/g' file.txt

# Replace from specific line
sed '2s/old/new/' file.txt

# Replace in range of lines
sed '1,10s/old/new/' file.txt

# Delete lines
sed '5d' file.txt           # Delete line 5
sed '1,10d' file.txt        # Delete lines 1-10
sed '/pattern/d' file.txt   # Delete matching lines

# Print specific lines
sed -n '5p' file.txt
sed -n '1,10p' file.txt

# Insert before line
sed '5i\New line' file.txt

# Append after line
sed '5a\New line' file.txt

# Multiple operations
sed -e 's/old/new/g' -e 's/foo/bar/g' file.txt

# Edit file in place
sed -i 's/old/new/g' file.txt

# Create backup while editing
sed -i.bak 's/old/new/g' file.txt
```

**Common Options:**
- `-i`: Edit in place
- `-n`: Suppress automatic printing
- `-e`: Multiple expressions
- `-f`: Script file

---

## 3. awk - Pattern Scanning and Processing

Powerful text processing and data extraction.

```bash
# Print first field (default delimiter: space)
awk '{print $1}' file.txt

# Print specific fields
awk '{print $1, $3}' file.txt

# Print last field
awk '{print $NF}' file.txt

# Print number of fields
awk '{print NF}' file.txt

# Use custom delimiter
awk -F: '{print $1}' /etc/passwd

# Conditional printing
awk '$1 > 100' file.txt
awk '/pattern/ {print $0}' file.txt

# Built-in variables
awk 'BEGIN {print "Start"} {print} END {print "Done"}' file.txt

# Arithmetic operations
awk '{sum += $1} END {print sum}' file.txt
awk '{avg += $1} END {print avg/NR}' file.txt

# Format output
awk '{printf "%-10s %5d\n", $1, $2}' file.txt

# Line number
awk '{print NR, $0}' file.txt

# Complex pattern
awk -F: '$3 >= 1000 && $3 < 65534 {print $1}' /etc/passwd
```

**Common Patterns:**
- `$1, $2, ...`: Fields
- `$0`: Entire line
- `$NF`: Last field
- `NR`: Current line number
- `NF`: Number of fields
- `FS`: Field separator
- `BEGIN`: Before processing
- `END`: After processing

---

## 4. cut - Remove Sections

Extract sections from each line of files.

```bash
# Extract first field (tab delimited)
cut -f1 file.txt

# Extract specific fields
cut -f1,3,5 file.txt

# Extract field range
cut -f2-5 file.txt

# Use custom delimiter
cut -d: -f1 /etc/passwd
cut -d, -f1,3 data.csv

# Extract characters
cut -c1-5 file.txt
cut -c1,3,5 file.txt

# Extract bytes
cut -b1-10 file.txt

# Complement (everything except)
cut -f1 --complement file.txt

# Output delimiter
cut -d: -f1,2 --output-delimiter=, file.txt
```

**Common Options:**
- `-f`: Fields
- `-c`: Characters
- `-b`: Bytes
- `-d`: Delimiter
- `--complement`: Invert selection

---

## 5. sort - Sort Lines

Sort lines of text files.

```bash
# Basic sort
sort file.txt

# Reverse sort
sort -r file.txt

# Numeric sort
sort -n file.txt

# Human-readable numeric sort (K, M, G)
sort -h file.txt

# Sort by specific field
sort -t: -k2 /etc/passwd

# Sort by multiple fields
sort -t: -k2,2 -k3,3n file.txt

# Remove duplicates
sort -u file.txt

# Case-insensitive sort
sort -f file.txt

# Sort by month
sort -M file.txt

# Output to file
sort file.txt -o sorted.txt

# Check if sorted
sort -c file.txt

# Randomize order
sort -R file.txt
```

**Common Options:**
- `-r`: Reverse
- `-n`: Numeric
- `-h`: Human-readable
- `-u`: Unique
- `-f`: Case-insensitive
- `-t`: Field delimiter
- `-k`: Sort key
- `-M`: Month sort
- `-R`: Random

---

## 6. uniq - Filter Duplicates

Remove or report duplicate lines (requires sorted input).

```bash
# Remove adjacent duplicates
uniq file.txt

# Remove duplicates (with sorted input)
sort file.txt | uniq

# Count occurrences
sort file.txt | uniq -c

# Show only duplicates
sort file.txt | uniq -d

# Show only unique lines
sort file.txt | uniq -u

# Case-insensitive
sort file.txt | uniq -i

# Skip first N fields
sort file.txt | uniq -f 2

# Skip first N characters
sort file.txt | uniq -s 5

# Compare only N characters
sort file.txt | uniq -w 10
```

**Common Options:**
- `-c`: Count occurrences
- `-d`: Duplicates only
- `-u`: Unique only
- `-i`: Case-insensitive
- `-f`: Skip fields
- `-s`: Skip characters
- `-w`: Compare characters

---

## 7. tr - Translate Characters

Translate or delete characters.

```bash
# Convert lowercase to uppercase
echo "hello" | tr 'a-z' 'A-Z'

# Convert uppercase to lowercase
echo "HELLO" | tr 'A-Z' 'a-z'

# Delete characters
echo "hello123" | tr -d '0-9'

# Squeeze repeated characters
echo "aaabbbccc" | tr -s 'a-z'

# Replace characters
echo "hello world" | tr ' ' '_'

# Convert to single space
echo "multiple   spaces" | tr -s ' '

# Delete newlines
tr -d '\n' < file.txt

# Convert tabs to spaces
tr '\t' ' ' < file.txt

# ROT13 cipher
echo "secret" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

**Common Options:**
- `-d`: Delete characters
- `-s`: Squeeze repeats
- `-c`: Complement set

---

## 8. wc - Word Count

Count lines, words, and characters.

```bash
# Count lines, words, bytes
wc file.txt

# Count lines only
wc -l file.txt

# Count words only
wc -w file.txt

# Count characters only
wc -m file.txt

# Count bytes only
wc -c file.txt

# Count longest line
wc -L file.txt

# Multiple files
wc file1.txt file2.txt file3.txt

# Combined with other commands
grep -r "TODO" . | wc -l
find . -name "*.py" | wc -l
```

**Common Options:**
- `-l`: Lines
- `-w`: Words
- `-m`: Characters
- `-c`: Bytes
- `-L`: Longest line

---

## 9. head/tail - First/Last Lines

View beginning or end of files.

```bash
# First 10 lines (default)
head file.txt

# First 20 lines
head -n 20 file.txt

# Last 10 lines (default)
tail file.txt

# Last 50 lines
tail -n 50 file.txt

# Follow file (log monitoring)
tail -f /var/log/syslog

# Follow with retry
tail -F /var/log/application.log

# Multiple files
tail file1.txt file2.txt

# Show bytes
tail -c 100 file.txt

# Quiet output (no headers)
tail -q file1.txt file2.txt

# Verbose (always show headers)
tail -v file1.txt file2.txt
```

**Common Options:**
- `-n`: Number of lines
- `-c`: Number of bytes
- `-f`: Follow
- `-F`: Follow with retry
- `-q`: Quiet
- `-v`: Verbose

---

## 10. diff/patch - Compare and Apply Differences

Compare files and apply patches.

```bash
# Compare two files
diff file1.txt file2.txt

# Unified format
diff -u file1.txt file2.txt

# Recursive directory comparison
diff -r dir1/ dir2/

# Ignore whitespace
diff -w file1.txt file2.txt

# Ignore case
diff -i file1.txt file2.txt

# Side-by-side comparison
diff -y file1.txt file2.txt

# Create patch file
diff -u original.txt modified.txt > changes.patch

# Apply patch
patch original.txt < changes.patch

# Apply patch (dry run)
patch --dry-run < changes.patch

# Reverse patch
patch -R < changes.patch

# Create patch from directory
diff -ruN dir1/ dir2/ > patch.diff

# Apply patch with offset
patch -p1 < patch.diff
```

**Common Options:**
- `-u`: Unified format
- `-r`: Recursive
- `-w`: Ignore whitespace
- `-i`: Ignore case
- `-y`: Side-by-side
- `-N`: Treat absent files as empty

---

## Practical Examples

### Log File Analysis

```bash
# Count errors by type
grep "ERROR" /var/log/app.log | cut -d: -f3 | sort | uniq -c

# Find top 10 IP addresses
grep "GET" /var/log/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10

# Extract failed login attempts
grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c

# Monitor logs in real-time
tail -f /var/log/syslog | grep -i error
```

### Data Extraction

```bash
# Extract emails from file
grep -oE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' file.txt

# Extract URLs
grep -oE 'https?://[^ ]+' file.txt

# Extract specific column from CSV
cut -d, -f2 data.csv

# Calculate sum of column
awk -F, '{sum+=$2} END {print sum}' data.csv

# Filter and sort data
awk -F, '$3 > 100' data.csv | sort -t, -k2 -rn
```

### Text Transformation

```bash
# Convert CSV to TSV
tr ',' '\t' < input.csv > output.tsv

# Remove all whitespace
tr -d '[:space:]' < file.txt

# Normalize line endings (Windows to Unix)
tr -d '\r' < dos.txt > unix.txt

# Replace multiple spaces with single
tr -s ' ' < file.txt

# Convert to lowercase
tr 'A-Z' 'a-z' < file.txt
```

### Generate Report

```bash
#!/bin/bash
# report.sh

echo "=== Log Analysis Report ==="
echo "Date: $(date)"
echo ""

echo "=== Total Lines ==="
wc -l /var/log/app.log

echo ""
echo "=== Error Count ==="
grep -c "ERROR" /var/log/app.log

echo ""
echo "=== Warning Count ==="
grep -c "WARNING" /var/log/app.log

echo ""
echo "=== Top Errors ==="
grep "ERROR" /var/log/app.log | sort | uniq -c | sort -rn | head -5
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| grep | Pattern search | `grep "error" file.log` |
| sed | Stream editor | `sed 's/old/new/g' file` |
| awk | Text processing | `awk '{print $1}' file` |
| cut | Extract fields | `cut -d: -f1 /etc/passwd` |
| sort | Sort lines | `sort -n file.txt` |
| uniq | Filter duplicates | `sort file | uniq -c` |
| tr | Translate chars | `tr 'a-z' 'A-Z'` |
| wc | Word count | `wc -l file.txt` |
| head/tail | First/last lines | `tail -f log.txt` |
| diff/patch | Compare files | `diff -u f1 f2 > patch` |

---

## Conclusion

These 10 text processing commands enable you to:

- Search and filter text patterns
- Transform and edit text streams
- Extract specific data fields
- Sort and remove duplicates
- Compare files and apply patches
- Analyze log files efficiently

Master these commands for powerful text manipulation and data processing in Linux.

---

**Related Articles:**
- [Linux File Content Commands](linux-file-content-commands.html)
- [Linux Process Management Commands](linux-process-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
