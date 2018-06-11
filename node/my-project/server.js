module.exports = function(opts){
	var time = opts.time||100;
	return function(req,res,next){
		var timer = setTimeout(function(){
			console.log("%s%s taking too long!");
		},time);
		var end = res.end;
		res.end = function(chunck,encoding){
			res.end = end;
			clearTimeout(timer);
		};
	next();
	
	};
}