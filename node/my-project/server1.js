var express = require("express"),search = require("./search1.js");
var app = express.createServer();
var name = 'hh';
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('view options',{layout:false});
app.get('/post/:name?',function(req,res){
	console.log(req.params.name == "hh")
	res.render('index.ejs');
});

app.get('/search',function(req,res,next){
	search(req.query.q,function(err,tweets){
		if(err)return next(err);
		res.render('search.ejs',{results:tweets,search:req.query.q});
	});
});
app.listen(3000);
app.configure('product',function(){
	app.enable('view cache');
});
