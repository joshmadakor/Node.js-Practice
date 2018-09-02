var http   = require('http');
var fs     = require('fs');
var port   = 80
var ip     = '127.0.0.1';

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'application/json'});
  var myObj = {
    name: 'Josh',
    job: 'IT Worker lol',
    age: '16',
    height: '183'
  };
  res.end(JSON.stringify(myObj));
  console.log(req.url);
});

server.listen(port,ip);
console.log(`server ${ip} listening on port ${port}.`);
