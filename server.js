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
