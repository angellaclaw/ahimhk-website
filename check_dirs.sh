#!/usr/bin/expect -f

set HOST "47.244.152.59"
set PORT "22"
set USER "wp_sftp_user"
set PASS "WPsftp@0420"

set timeout 30

spawn sftp -P $PORT $USER@$HOST
expect "password:"
send "$PASS\r"
expect "sftp>"

# Check home directory and available dirs
send "pwd\r"
expect "sftp>"

send "ls -la\r"
expect "sftp>"

send "ls -la /\r"
expect "sftp>"

send "quit\r"
expect eof
