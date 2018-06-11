var express = require('express');
var app = express();
var server = require('http').Server(app);
// var http = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static('public'));

server.listen(3000, function(){
  console.log('listening on *:3000');
});


io.on('connection', function(socket){
  console.log('a user connected');
  /*断开连接时*/ 
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });

  /*通信*/
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  // });
});
