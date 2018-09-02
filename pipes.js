var port = 80
var ip   = '127.0.0.1'
var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  var myReadStream = fs.createReadStream(`${__dirname}/index.html`, `ascii`);
  myReadStream.pipe(res);
});

server.listen(port, ip);
console.log(`server ${ip} listening on port ${port}.`)
