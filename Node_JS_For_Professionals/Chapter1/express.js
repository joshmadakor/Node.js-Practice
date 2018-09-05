var express = require('express');
var app = express();
var port = 1111;
var ip = '127.0.0.1';

app.get('/ping', function(request, response){
  response.send('pong.');
});

app.listen(port, ip);
