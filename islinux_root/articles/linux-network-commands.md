# Essential Linux Network Commands

## Introduction

Network management is a critical skill for Linux system administrators and developers. From troubleshooting connectivity issues to monitoring network performance, these commands help you diagnose and resolve network problems. This guide covers 10 essential network commands.

---

## 1. ping - Test Network Connectivity

Check if a host is reachable and measure response time.

```bash
# Basic ping (Ctrl+C to stop)
ping google.com

# Send specific number of packets
ping -c 4 google.com

# Set interval between pings (seconds)
ping -i 2 google.com

# Ping with specific packet size
ping -s 1000 google.com

# Flood ping (root only, use carefully)
sudo ping -f google.com

# Set timeout
ping -W 5 google.com

# Only show summary
ping -q -c 5 google.com
```

**Common Options:**
- `-c`: Count of packets
- `-i`: Interval between packets
- `-s`: Packet size
- `-W`: Timeout in seconds
- `-q`: Quiet output (summary only)
- `-f`: Flood ping

---

## 2. curl - Transfer Data with URLs

Download or upload data using various protocols.

```bash
# Basic GET request
curl https://api.example.com/data

# Save to file
curl -o page.html https://example.com

# Save with original filename
curl -O https://example.com/file.zip

# Show headers only
curl -I https://example.com

# Follow redirects
curl -L https://example.com

# Send POST request
curl -X POST -d "key=value" https://api.example.com

# Send JSON data
curl -X POST -H "Content-Type: application/json" \
     -d '{"name":"test"}' https://api.example.com

# Add custom headers
curl -H "Authorization: Bearer token" https://api.example.com

# Show verbose output
curl -v https://example.com

# Download with progress bar
curl --progress-bar -O https://example.com/file.zip
```

**Common Options:**
- `-o`: Save to file
- `-O`: Save with original filename
- `-I`: Headers only
- `-L`: Follow redirects
- `-X`: HTTP method
- `-d`: Data to send
- `-H`: Custom header
- `-v`: Verbose output

---

## 3. wget - Download Files

Download files from the web.

```bash
# Basic download
wget https://example.com/file.zip

# Save with different name
wget -O myfile.zip https://example.com/file.zip

# Download in background
wget -b https://example.com/largefile.zip

# Resume interrupted download
wget -c https://example.com/file.zip

# Download entire website
wget -r https://example.com

# Download with rate limit
wget --limit-rate=500k https://example.com/file.zip

# Download multiple files
wget -i filelist.txt

# FTP download
wget ftp://user:pass@ftp.example.com/file.zip
```

**Common Options:**
- `-O`: Output filename
- `-c`: Continue partial download
- `-r`: Recursive download
- `-b`: Background download
- `-i`: Download from file list

---

## 4. netstat - Network Statistics

Display network connections, routing tables, and interface statistics.

```bash
# Show all connections
netstat -a

# Show TCP connections
netstat -t

# Show UDP connections
netstat -u

# Show listening ports
netstat -l

# Show numeric addresses
netstat -n

# Show process using port
netstat -p

# Show all with numeric and process
netstat -tulpn

# Show routing table
netstat -r

# Show network statistics
netstat -s

# Show only listening TCP ports
netstat -tlnp
```

**Common Options:**
- `-t`: TCP connections
- `-u`: UDP connections
- `-l`: Listening ports
- `-n`: Numeric addresses
- `-p`: Show process
- `-r`: Routing table
- `-s`: Statistics

**Note:** `ss` command is the modern replacement for netstat.

---

## 5. ss - Socket Statistics

Fast alternative to netstat for socket statistics.

```bash
# Show all sockets
ss -a

# Show TCP sockets
ss -t

# Show UDP sockets
ss -u

# Show listening sockets
ss -l

# Show numeric addresses
ss -n

# Show process information
ss -p

# Show all with process info
ss -tulpn

# Show established connections
ss -t state established

# Show listening ports with details
ss -lntp

# Filter by port
ss -tulpn | grep :80
```

**Common Options:**
- `-t`: TCP sockets
- `-u`: UDP sockets
- `-l`: Listening sockets
- `-n`: Numeric addresses
- `-p`: Process info
- `-a`: All sockets

---

## 6. ifconfig/ip - Network Interface Configuration

Configure and display network interface parameters.

```bash
# Show all interfaces (deprecated)
ifconfig -a

# Show specific interface
ifconfig eth0

# Bring interface up
sudo ifconfig eth0 up

# Bring interface down
sudo ifconfig eth0 down

# Set IP address
sudo ifconfig eth0 192.168.1.100

# Modern replacement: ip command
ip addr show           # Show all addresses
ip addr show eth0      # Show specific interface
ip link show           # Show all links
ip link set eth0 up    # Bring interface up
ip link set eth0 down  # Bring interface down
ip route show          # Show routing table
```

**Common Options (ifconfig):**
- `-a`: All interfaces
- `up`: Enable interface
- `down`: Disable interface

**ip command subcommands:**
- `addr`: Address management
- `link`: Link management
- `route`: Routing table

---

## 7. nslookup/dig - DNS Lookup

Query DNS servers for domain information.

```bash
# Basic DNS lookup
nslookup google.com

# Query specific DNS server
nslookup google.com 8.8.8.8

# Query MX records
nslookup -type=mx google.com

# Query NS records
nslookup -type=ns google.com

# Using dig (more detailed)
dig google.com

# Query specific record type
dig google.com MX

# Query specific DNS server
dig @8.8.8.8 google.com

# Short output
dig +short google.com

# Trace DNS path
dig +trace google.com

# Query all record types
dig google.com ANY
```

**Common Options:**
- `-type`: Record type (A, MX, NS, TXT, etc.)
- `+short`: Brief output
- `+trace`: Trace delegation path

---

## 8. traceroute - Trace Network Path

Show the route packets take to reach a host.

```bash
# Basic traceroute
traceroute google.com

# Use ICMP instead of UDP
traceroute -I google.com

# Set maximum TTL (hops)
traceroute -m 20 google.com

# Set wait time per hop
traceroute -w 3 google.com

# Use TCP SYN packets
traceroute -T -p 80 google.com

# Modern alternative: tracepath
tracepath google.com

# Using mtr (combined ping + traceroute)
mtr google.com
mtr -rw google.com  # Report mode
```

**Common Options:**
- `-I`: Use ICMP
- `-m`: Maximum TTL
- `-w`: Wait time
- `-T`: TCP SYN mode
- `-p`: Port number

---

## 9. ssh - Secure Shell

Connect to remote servers securely.

```bash
# Basic SSH connection
ssh user@hostname

# Specify port
ssh -p 2222 user@hostname

# Use specific identity file
ssh -i ~/.ssh/id_rsa user@hostname

# Enable verbose mode
ssh -v user@hostname

# Run remote command
ssh user@hostname "ls -la"

# Copy SSH key to server
ssh-copy-id user@hostname

# SSH with X11 forwarding
ssh -X user@hostname

# Create SSH tunnel (local port forwarding)
ssh -L 8080:localhost:80 user@hostname

# Create SSH tunnel (remote port forwarding)
ssh -R 8080:localhost:80 user@hostname

# SOCKS proxy
ssh -D 1080 user@hostname
```

**Common Options:**
- `-p`: Port number
- `-i`: Identity file
- `-v`: Verbose mode
- `-X`: X11 forwarding
- `-L`: Local port forwarding
- `-R`: Remote port forwarding
- `-D`: Dynamic port forwarding

---

## 10. scp - Secure Copy

Copy files between hosts securely.

```bash
# Copy file to remote server
scp file.txt user@hostname:/home/user/

# Copy file from remote server
scp user@hostname:/home/user/file.txt .

# Copy directory recursively
scp -r directory/ user@hostname:/backup/

# Specify port
scp -P 2222 file.txt user@hostname:/home/user/

# Use specific identity file
scp -i ~/.ssh/id_rsa file.txt user@hostname:/home/user/

# Preserve timestamps and permissions
scp -p file.txt user@hostname:/home/user/

# Show progress
scp -v file.txt user@hostname:/home/user/

# Limit bandwidth
scp -l 5000 file.txt user@hostname:/home/user/
```

**Common Options:**
- `-r`: Recursive copy
- `-P`: Port number
- `-i`: Identity file
- `-p`: Preserve attributes
- `-v`: Verbose output
- `-l`: Bandwidth limit (Kbit/s)

---

## Practical Examples

### Check if Service is Running

```bash
# Check if web server is listening
ss -tlnp | grep :80

# Check all listening ports
ss -tulpn

# Check specific process network
ss -tulpn | grep nginx
```

### Test API Endpoint

```bash
# GET request with headers
curl -X GET -H "Accept: application/json" \
     https://api.example.com/users

# POST with JSON
curl -X POST -H "Content-Type: application/json" \
     -d '{"name":"test","email":"test@example.com"}' \
     https://api.example.com/users

# Test response time
curl -w "@curl-format.txt" -o /dev/null -s https://example.com
```

### DNS Troubleshooting

```bash
# Check domain resolution
dig example.com

# Check MX records for email
dig example.com MX

# Check DNS propagation
dig @8.8.8.8 example.com
dig @1.1.1.1 example.com

# Verify reverse DNS
dig -x 8.8.8.8
```

### Network Diagnostics

```bash
# Test connectivity
ping -c 4 google.com

# Trace route to server
traceroute -I google.com

# Check DNS resolution
nslookup google.com

# Test specific port
nc -zv google.com 443

# Combined network check
mtr -rw google.com
```

### SSH Key Setup

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy key to server
ssh-copy-id user@hostname

# Test SSH connection
ssh -T user@hostname

# Create SSH config
cat >> ~/.ssh/config << EOF
Host myserver
    HostName 192.168.1.100
    User deploy
    IdentityFile ~/.ssh/id_ed25519
    Port 2222
EOF
```

---

## Quick Reference Table

| Command | Purpose | Example |
|---------|---------|---------|
| ping | Test connectivity | `ping -c 4 google.com` |
| curl | Transfer data | `curl -O file.zip` |
| wget | Download files | `wget url` |
| netstat | Network stats | `netstat -tulpn` |
| ss | Socket stats | `ss -tlnp` |
| ifconfig/ip | Interface config | `ip addr show` |
| nslookup/dig | DNS lookup | `dig example.com` |
| traceroute | Trace route | `traceroute host` |
| ssh | Remote shell | `ssh user@host` |
| scp | Secure copy | `scp file user@host:/path` |

---

## Conclusion

These 10 network commands are essential for:

- Testing network connectivity
- Downloading and transferring files
- Diagnosing network issues
- Managing network interfaces
- Connecting to remote servers
- Analyzing network traffic

Master these commands to effectively troubleshoot and manage network operations in Linux.

---

**Related Articles:**
- [Linux System Information Commands](linux-system-info-commands.html)
- [Linux Process Management Commands](linux-process-commands.html)
- [Singapore VPS Review](vps-singapore-review.html)
