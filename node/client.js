var http = require('http'),fs = require('fs');
var server = http.createServer(function(req,res){
    // console.log(req.url);
    // if('GET' == req.method && '/images' == req.url.substr(0.7)&&'.jpg' == req.url.substr(-4)){
    //     fs.stat(__dirname +req.url,function(err,stat){
    //         if(err||!stat.isfile){
    //             res.writeHead(404);
    //             res.end('Not Found');
    //             return;
    //         }
    //         server(__dirname+req.url,'applcation/jpg');
    //     });
    // }
});
server.listen(8000);