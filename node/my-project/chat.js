var net = require('net');
var count = 0,users = [];

var server = net.createServer(function (conn) {
    conn.write('>welcome to \033[92mnode-chat\033[39m!\n'
    + count + 'other people are connected at this time\n' 
    + '>please write your username and perss enter\n');
    count++;
    conn.setEncoding('utf8');
    var nickname;
    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }
    conn.on('data',function(data) {
    	// console.log(data);
        data =data.replace('\r\n', '');;
        
    });

    if (!nickname) {
        	// console.log(nickname);
            if (users[body]) {
                conn.write('\033[93m>nickname already in use.try again:\033[39m');
                return;
            } else {
                nickname = body;
                users[nickname] = conn;
                broadcast('\033[90m' + nickname + 'joined the room\033[39m\n');
            }
        } else {
            broadcast('\033[90m' + nickname + ':\033[39m' + body + '\n', true);
        }
    // console.log(data);
    conn.on('close', function () {
        count--;
        delete users[nickname];
        broadcast('\033[90m'+nickname+'left the room\033[39m\n');
    });
});
server.listen(3000, function () {
    console.log('\033[96m server listening on *:3000\033[39m');
});