#!/usr/bin/expect -f

set HOST "47.244.152.59"
set PORT "22"
set USER "wp_sftp_user"
set PASS "WPsftp@0420"
set LOCALDIR "/Users/nelson/corp-site/build"
set DESTDIR "/data/www/test.ahimhk.com"

set timeout 180

# Use rsync over SSH with password via expect
spawn rsync -avz --delete -e "sshpass -p $PASS ssh -o StrictHostKeyChecking=no -p $PORT" $LOCALDIR/ $USER@$HOST:$DESTDIR/

expect {
    "password:" {
        send "$PASS\r"
    }
    eof {
        puts "EOF reached"
    }
}

expect eof
