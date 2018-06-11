var mysql = require('mysql'),
config = require('./config');
delete config.database;
var db = mysql.createClient(config);
db.query('CREATE BATABASE IF NOT EXISTS `cart-example`');
db.query('USE`chat-example`');
db.query('DROP TABLE IF EXISTS item');
db.query('CREATE TABLE item('+
	'id INT(11) AUTO_INCREMENT,'+
	'title VARCHAR(255),'+
	'description TEXT,'+
	'created DATATIME,'+
	'PRIMARY KEY (id))');
db.query('DROP TABLE IF EXISTS review');
db.query('CREATE TABLE review('+
	'id INT(11) AUTO_INCREMENT,'+
	'item_id INT(11),'+
	'text TEXT,'+
	'stars INT(1),'+
	'create DATATIME,'+
	'PRIMARY KEY(id))');
db.end(function(){
	process.exit();
});