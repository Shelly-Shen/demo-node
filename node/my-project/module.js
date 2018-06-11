var connect = require('connect');
var server = connect.createServer();
server.use('/module',connect.static('/static'));
server.listen(8000);