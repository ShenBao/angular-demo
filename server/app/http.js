


var express = require('express');

var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){

	res.send('首页');

})

app.post('/dologin',function(req,res){

	console.log(req.body);

 	res.json({"msg":'post成功'});

})

app.get('/news',function(req,res){

	//console.log(req.body);

	res.jsonp({"msg":'这是新闻数据'});

})


app.listen(3000,'127.0.0.1');