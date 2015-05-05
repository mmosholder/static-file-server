var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


fs.readFile('data.txt', function (err, data) {
    app.get('/', function(req, res) {
	       
        res.header('Content-Type', 'text/html');
        res.send(data);
    });
});


var server = app.listen(3122, function() {
	console.log('Express server listening on port ' + server.address().port);
});

