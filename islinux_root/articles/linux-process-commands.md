# Essential Linux Process Management Commands

## Introduction

Process management is crucial for monitoring system performance, troubleshooting issues, and maintaining system stability. Understanding how to view, control, and manage processes is essential for every Linux user. This guide covers 10 essential commands for process management.

---

## 1. ps - Display Running Processes

Show information about active processes.

```bash
# Show processes for current user
ps

# Show all processes
ps aux

# BSD-style process listing
ps aux | head

# Show processes in tree format
ps auxf

# Show specific user's processes
ps -u john

# Show processes by PID
ps -p 1234

# Show detailed format
ps -eo pid,ppid,user,stat,pcpu,pmem,cmd

# Show only running processes
ps -eo pid,stat,cmd | grep -w R
```

**Common Options:**
- `a`: All users' processes
- `u`: User-oriented format
- `x`: Include processes without controlling terminal
- `-e`: Show all processes (same as `aux`)
- `-f`: Full-format listing
- `-o`: Custom output format

**Output Columns:**
- `PID`: Process ID
- `PPID`: Parent Process ID
- `USER`: Owner
- `STAT`: Status (R=running, S=sleeping, Z=zombie)
- `%CPU`: CPU usage
- `%MEM`: Memory usage
- `CMD`: Command

---

## 2. top - Real-time Process Monitor

Display dynamic real-time view of system processes.

```bash
# Start top
top

# Show processes for specific user
top -u john

# Sort by CPU usage
top -o %CPU

# Sort by memory usage
top -o %MEM

# Set refresh delay (seconds)
top -d 5

# Show only specific number of processes
top -n 50
```

**Interactive Commands (while running):**
- `P`: Sort by CPU usage
- `M`: Sort by memory usage
- `N`: Sort by PID
- `k`: Kill a process
- `q`: Quit
- `h`: Help
- `c`: Show full command path
- `1`: Show all CPU cores

---

## 3. htop - Interactive Process Viewer

Enhanced alternative to top with better UI.

```bash
# Start htop
htop

# Show specific user's processes
htop -u john

# Show specific process
htop -p 1234

# Sort by CPU
htop --sort-key=PERCENT_CPU

# Sort by memory
htop --sort-key=PERCENT_MEM
```

**Interactive Commands:**
- `F1`: Help
- `F2`: Setup
- `F3`: Search
- `F4`: Filter
- `F5`: Tree view
- `F6`: Sort
- `F9`: Kill process
- `F10`: Quit
- `Arrow keys`: Navigate
- `Space`: Tag process
- `s`: Trace system calls (strace)

**Note:** Install with `sudo apt install htop` if not available.

---

## 4. kill - Terminate Processes

Send signals to processes to terminate or control them.

```bash
# Send SIGTERM (graceful termination)
kill 1234

# Send SIGKILL (force kill)
kill -9 1234

# Send SIGHUP (reload configuration)
kill -HUP 1234

# Kill by process name
killall nginx

# Kill with interactive confirmation
kill -i 1234

# Kill all processes for user
pkill -u john

# Kill matching pattern
pkill -f "python app.py"
```

**Common Signals:**
- `SIGTERM (15)`: Graceful termination (default)
- `SIGKILL (9)`: Force kill (cannot be caught)
- `SIGHUP (1)`: Hang up / reload config
- `SIGINT (2)`: Interrupt (Ctrl+C)
- `SIGSTOP`: Stop process
- `SIGCONT`: Continue stopped process

---

## 5. killall - Kill by Name

Kill processes by exact name.

```bash
# Kill all processes with name
killall nginx

# Kill with signal
killall -9 nginx

# Interactive kill
killall -i nginx

# Kill processes older than time
killall -o 1h chrome

# Kill processes younger than time
killall -y 10m script.py

# Verbose output
killall -v nginx
```

**Common Options:**
- `-signal`: Send specific signal
- `-i`: Interactive confirmation
- `-v`: Verbose output
- `-o`: Kill older than
- `-y`: Kill younger than

---

## 6. pkill - Kill by Pattern

Kill processes matching pattern.

```bash
# Kill by name pattern
pkill firefox

# Kill by full command
pkill -f "python server.py"

# Kill by user
pkill -u john

# Kill with signal
pkill -9 nginx

# Kill parent and children
pkill -P 1234

# Test match (don't kill, just show)
pkill -l nginx
```

**Common Options:**
- `-f`: Match against full command
- `-u`: Match by user
- `-P`: Match by parent PID
- `-signal`: Send specific signal
- `-l`: List matching processes

---

## 7. nice - Run with Priority

Start a process with modified scheduling priority.

```bash
# Run with default nice value
nice command

# Run with high priority (needs root)
nice -n -10 backup.sh

# Run with low priority
nice -n 19 long_task.sh

# Run compilation with low priority
nice -n 10 make -j4

# View nice value of running process
ps -o pid,nice,cmd -p 1234
```

**Nice Values:**
- Range: `-20` (highest priority) to `19` (lowest)
- Default: `0`
- Negative values require root privileges
- Positive values = lower priority

---

## 8. renice - Modify Priority

Change priority of running processes.

```bash
# Change priority by PID
renice 10 -p 1234

# Change priority by user
renice 5 -u john

# Change priority by group
renice 5 -g developers

# Change multiple processes
renice 10 -p 1234 -p 5678

# Root can set negative nice
renice -5 -p 1234
```

**Common Options:**
- `-p`: Target PID
- `-u`: Target user
- `-g`: Target group

**Note:** Only root can decrease nice value (increase priority).

---

## 9. bg/fg - Job Control

Manage background and foreground jobs.

```bash
# List jobs
jobs

# Send job to background
bg %1

# Bring job to foreground
fg %1

# Start job in background
sleep 100 &

# Suspend foreground job (Ctrl+Z)
# Then resume in background
bg

# Run and detach from terminal
nohup long_task.sh &

# Run in subshell
(sleep 100) &
```

**Job Control Commands:**
- `jobs`: List background jobs
- `bg [job]`: Resume job in background
- `fg [job]`: Resume job in foreground
- `Ctrl+Z`: Suspend foreground job
- `&`: Run command in background

---

## 10. nohup - Run Immune to Hangups

Run processes that continue after logout.

```bash
# Run command immune to hangups
nohup command &

# Run with output redirection
nohup python app.py > output.log 2>&1 &

# Run in background with nohup
nohup ./backup.sh &

# Check nohup output
cat nohup.out

# Run with custom output file
nohup ./process.sh > mylog.out 2>&1 &
```

**Common Usage:**
- Long-running tasks
- Background services
- Tasks that survive logout
- Server processes

---

## Practical Examples

### Monitor High CPU Processes

```bash
# Show top 10 CPU consumers
ps aux --sort=-%cpu | head -11

# Continuously monitor
watch -n 1 'ps aux --sort=-%cpu | head -5'

# Kill high CPU process
ps aux --sort=-%cpu | awk 'NR==2{print $2}' | xargs kill
```

### Find and Kill Stuck Processes

```bash
# Find zombie processes
ps aux | grep -w Z

# Find processes running more than 1 hour
ps -eo pid,etime,cmd | grep -E "[0-9]{2}:[0-9]{2}:[0-9]{2}"

# Kill all stuck chrome processes
pkill -9 chrome

# Kill processes by pattern
ps aux | grep "stuck_script" | grep -v grep | awk '{print $2}' | xargs kill -9
```

### Manage Background Tasks

```bash
# Start long backup in background
nohup ./backup.sh > backup.log 2>&1 &

# Check background jobs
jobs -l

# Move running job to background
# Press Ctrl+Z, then:
bg

# Disown job (survive shell exit)
disown %1
```

### Process Tree Analysis

```bash
# Show process tree
pstree

# Show tree with PIDs
pstree -p

# Show specific process tree
pstree -p 1234

# Find parent of process
ps -o ppid= -p 1234

# Find all children of process
pgrep -P 1234
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| ps | List processes | `ps aux` |
| top | Real-time monitor | `top` |
| htop | Enhanced monitor | `htop` |
| kill | Terminate by PID | `kill 1234` |
| killall | Kill by name | `killall nginx` |
| pkill | Kill by pattern | `pkill -f script` |
| nice | Set priority | `nice -n 10 cmd` |
| renice | Change priority | `renice 5 -p 1234` |
| bg/fg | Job control | `fg %1` |
| nohup | Immune to hangup | `nohup cmd &` |

---

## Process States Explained

| State | Code | Description |
|-------|------|-------------|
| Running | R | Actively running |
| Sleeping | S | Waiting for event |
| Disk Sleep | D | Uninterruptible sleep |
| Stopped | T | Stopped by signal |
| Zombie | Z | Terminated but not reaped |
| Dead | X | Dead process |

---

## Conclusion

These 10 process management commands enable you to:

- View and monitor running processes
- Identify resource-intensive processes
- Terminate stuck or unwanted processes
- Control process priorities
- Manage background jobs
- Run tasks that survive logout

Master these commands for effective system monitoring and process control.

---

**Related Articles:**
- [Linux System Information Commands](linux-system-info-commands.html)
- [Linux Network Commands](linux-network-commands.html)
- [Modern Linux Productivity Tools for 2026](linux-productivity-tools-2026.html)
