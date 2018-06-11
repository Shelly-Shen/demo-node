var connect = require("connect");
process.stdin.resume();
process.stdin.setEncoding('ascii');
var server  = connect(
	connect.basicAuth(function(user,pass,fn){
	process.stdout.write('Allow'+user+'with'+pass+'?[y/n]');
	process.stdin.once('data',function(data){
		if(data[0] =='y'){
			fn(null,{username:user});
		}
		else fn(new Error('NOT'));
	});
}),
	function(req,res){
		res.writeHead(200);
		res.end('Welcome'+req.remoteUser.username);
	}
);
server.listen(3000);