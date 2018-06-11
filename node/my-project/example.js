var connect = require('connect');
var server = connect(
	connect.static('static'),
	connect.bodyParser(),
	function(req,res,next){
		if('POST'==req.method){
			console.log(req.body);
		}else{
			next();
		}
	}
);


// if('POST' == req.method && req.body.file){
// 	fs.readFile(req.body.file.path,'utf-8',function(err,data){
// 		if(err){
// 			return;
// 		}
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		res.end('<h3>File:'+req.body.file.name+'</h3>');
// 	});
// }else{
// 	next();
// }
server.listen(8888);