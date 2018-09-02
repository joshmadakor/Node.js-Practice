/*
var port   = 8080
var ip     = '127.0.0.1'
var http   = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/html'});
  console.log(req.url);
  res.end(`Welcome to ${ip}:${port}`)
})

server.listen(port, ip);
console.log(`Server ${ip} is listening on port ${port}.`)
*/

var http = require('http');
var fs   = require('fs');

var myReadStream =  fs.createReadStream (`${__dirname}/sample.txt`, 'ascii');
var myWriteStream = fs.createWriteStream(`${__dirname}/writeme.txt`,'ascii');
var benis = "";
myReadStream.pipe(myWriteStream);
