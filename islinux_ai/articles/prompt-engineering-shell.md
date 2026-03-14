# AI Prompt Engineering: How to Write Perfect Shell Script Generation Prompts

> Master prompt engineering to let AI help you write high-quality, safe Bash scripts

## What is Prompt Engineering?

Prompt Engineering refers to guiding AI models to generate more accurate and useful output results through carefully designed input prompts.

### Why is it Important?

```
❌ Poor prompt:
"Write a backup script"

✅ Excellent prompt:
"As a senior Linux operations engineer, please write a MySQL database backup script for production environment.
Requirements: 1) Use mysqldump 2) Auto-compress 3) Keep 7 days of backups 4) Error logging 5) Include detailed comments"
```

## Core Elements of Shell Script Generation

### 1. Role Setting

Define AI's role to let it think from a professional perspective:

```
As a Linux system administrator with 10 years of experience...
As a DevOps expert specializing in automation scripts...
As a security engineer focusing on script security...
```

### 2. Task Description

Clearly and specifically describe requirements:

| Element | Example |
|---------|---------|
| Goal | "Backup /var/www directory" |
| Constraints | "No more than 50 lines of code" |
| Format | "Use Bash 4.0+ syntax" |
| Output | "Generate complete executable script" |

### 3. Security Requirements

Shell scripts involve system operations, security must be emphasized:

```
Please ensure the script:
- Validates input parameters
- Checks command execution results
- Does not use eval
- Properly handles special characters
- Includes error handling
```

### 4. Comment Standards

```
Requirements:
- Every function has a docstring
- Add inline comments for key steps
- Include usage examples
```

## Complete Prompt Templates

### Template 1: System Administration Script

```
As a senior Linux operations expert, please write a [task description] script.

Specific requirements:
1. Use Bash 4.0+ syntax
2. Include parameter validation
3. Implement error handling (set -euo pipefail)
4. Add detailed comments explaining each step
5. Follow ShellCheck best practices
6. Include usage examples

The script needs to implement the following functions:
- [Function 1]
- [Function 2]
- [Function 3]

Please output the complete, directly runnable script code.
```

### Template 2: Automation Deployment Script

```
You are a DevOps engineer specializing in CI/CD pipeline design.

Please write an automated deployment script with requirements:

Tech stack:
- Runtime environment: Ubuntu 22.04
- Deployment target: Docker containers
- Configuration management: Environment variables + ConfigMap

Functional requirements:
1. Pull latest code
2. Build Docker image
3. Stop old container
4. Start new container
5. Health check

Security requirements:
- Verify Docker installation
- Check port occupancy
- Rollback mechanism

Please generate the complete deployment script with usage instructions.
```

### Template 3: Log Analysis Script

```
As a data analyst and Linux expert, please help me write a log analysis script.

Input: Nginx access.log file
Output: Top 10 IPs, Top 10 URLs, status code statistics

Requirements:
1. Use standard tools like awk, sort, uniq
2. Support streaming processing for large files
3. Output formatted tables
4. Optional: Generate JSON format report

Please provide two implementations:
- One-liner command version
- Complete script version
```

## Practical Examples

### Example 1: Database Backup Script

**Prompt**:
```
As a senior Linux operations engineer, please write a MySQL database backup script for production environment.

Environment information:
- MySQL 8.0
- Backup storage: /backup/mysql
- Retention policy: 7 days
- Compression: gzip

Functional requirements:
1. Support full backup
2. Auto-delete expired backups
3. Log backup operations
4. Send alerts on failure (email)
5. Support custom backup directory

Security requirements:
- Read password from environment variables
- Verify disk space
- Check MySQL service status

Please generate the complete script with detailed comments and usage instructions.
```

**AI Generated Result**:
```bash
#!/bin/bash
#===============================================================================
# Script Name: mysql_backup.sh
# Description: MySQL database production environment backup script
# Usage: ./mysql_backup.sh [backup directory]
#===============================================================================

set -euo pipefail  # Strict error handling

# Configuration (can be overridden by environment variables)
BACKUP_DIR="${1:-${MYSQL_BACKUP_DIR:-/backup/mysql}}"
RETENTION_DAYS="${MYSQL_RETENTION_DAYS:-7}"
MYSQL_USER="${MYSQL_USER:-backup}"
LOG_FILE="/var/log/mysql_backup.log"

#-------------------------------------------------------------------------------
# Log function
#-------------------------------------------------------------------------------
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

#-------------------------------------------------------------------------------
# Error handling function
#-------------------------------------------------------------------------------
error_exit() {
    log "ERROR: $*"
    # Add email alert logic here
    exit 1
}

#-------------------------------------------------------------------------------
# Prerequisites check
#-------------------------------------------------------------------------------
check_prerequisites() {
    # Check if MySQL password is set
    if [[ -z "${MYSQL_PWD:-}" ]]; then
        error_exit "MYSQL_PWD environment variable not set"
    fi

    # Check if mysqldump is available
    if ! command -v mysqldump &>/dev/null; then
        error_exit "mysqldump command not found"
    fi

    # Check disk space (at least 1GB required)
    local available_space
    available_space=$(df -P "$BACKUP_DIR" | awk 'NR==2 {print $4}')
    if [[ "$available_space" -lt 1048576 ]]; then
        error_exit "Insufficient disk space (at least 1GB required)"
    fi
}

#-------------------------------------------------------------------------------
# Main backup function
#-------------------------------------------------------------------------------
perform_backup() {
    local timestamp
    timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_file="${BACKUP_DIR}/backup_${timestamp}.sql.gz"

    log "Starting database backup..."

    # Get list of all databases
    local databases
    databases=$(mysql -u "$MYSQL_USER" -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema)")

    for db in $databases; do
        log "Backing up database: $db"
        mysqldump -u "$MYSQL_USER" --databases "$db" | gzip >> "$backup_file"
    done

    log "Backup completed: $backup_file"
}

#-------------------------------------------------------------------------------
# Clean up expired backups
#-------------------------------------------------------------------------------
cleanup_old_backups() {
    log "Cleaning up backups older than ${RETENTION_DAYS} days..."
    find "$BACKUP_DIR" -name "backup_*.sql.gz" -mtime +${RETENTION_DAYS} -delete
    log "Cleanup completed"
}

#-------------------------------------------------------------------------------
# Main program
#-------------------------------------------------------------------------------
main() {
    log "=========================================="
    log "MySQL backup task started"
    log "=========================================="

    check_prerequisites
    perform_backup
    cleanup_old_backups

    log "Backup task completed successfully"
}

main "$@"
```

### Example 2: Service Monitoring Script

**Prompt**:
```
As an SRE engineer, please write a service health check script.

Monitoring targets:
- Nginx service status
- MySQL connections
- Disk usage
- Memory usage
- CPU load

Output requirements:
- Colored terminal output
- JSON format report (optional)
- Alert when thresholds exceeded

Threshold settings:
- Disk: 85%
- Memory: 90%
- CPU load: 2.0 (1 minute)
```

## Advanced Techniques

### 1. Few-Shot Learning

Provide examples to AI to help it understand your expectations:

```
Refer to the following script style:

Example 1:
```bash
# Function naming uses underscores
# Variables use uppercase
# Each function has a comment block
```

Please write in the same style...
```

### 2. Chain of Thought

Let AI think step by step:

```
Please complete the task following these steps:
1. First analyze requirements, list key points
2. Design script structure
3. Write core functions
4. Add error handling
5. Add comments and documentation
```

### 3. Constraints

Clear limitations can prevent AI from generating unrealistic code:

```
Constraints:
- Only use POSIX compatible commands
- No external tool dependencies (except standard coreutils)
- Script should not exceed 100 lines
- Compatible with Bash 3.2+
```

## Common Errors and How to Avoid Them

### 1. Too Vague

```
❌ "Write a script to process files"
✅ "Write a script to compress all .log files under /var/log and move them to /archive"
```

### 2. Ignoring Error Handling

```
❌ No mention of error handling
✅ Require "Use set -euo pipefail, check return value for every command"
```

### 3. Missing Security Considerations

```
❌ Directly generate executable code
✅ Require "Validate all input, escape special characters, do not use eval"
```

## Recommended AI Tools

| Tool | Features | Use Cases |
|------|----------|-----------|
| Claude | High code quality, detailed comments | Complex script generation |
| GPT-4 | Strong generalization | Daily tasks |
| Cursor | IDE integration | Project development |

## Conclusion

Mastering Prompt Engineering can significantly improve your Shell script development efficiency. Remember:

1. **Specific over vague** - Describe requirements in detail
2. **Security first** - Always require error handling
3. **Iterative optimization** - Adjust prompts based on results
4. **Manual review** - AI-generated code needs review

---

**Related Tools**:
- [Online Shell Script Editor](https://tool.islinux.com)
- [Bash Syntax Checker](https://tool.islinux.com/shellcheck)

**Related Reading**:
- [Linux Productivity Tools Guide](https://islinux.com/articles/linux-productivity-tools-2026)
