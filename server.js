var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));




app.get('/dashboard',function(req,res) {
	res.sendFile(__dirname + "/assignment CS 305.html");
});

//192.168.254.3-HOME

app.listen(3000, function() {
	console.log('Port 3000');

});