var ip   = '127.0.0.1';
var port = 80
var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(req, res){
  console.log(`Requsted : ${req.url}`);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'},'ascii');
    fs.createReadStream(`${__dirname}/index.html`).pipe(res);
  }
  else if (req.url === '/contact')
  {
    res.writeHead(200,{'Content-Type':'text/html'},'ascii');
    fs.createReadStream(`${__dirname}/contact.html`).pipe(res);
  }
  else if (req.url === '/api')
  {
    var wow = [{name: 'Josh', age: 33},{name: 'Ayami', age: 27},{name: 'Tomo', age: 28},{name: 'Mike', age: 25}];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(wow));
  }
  else {
    res.writeHead(404,{'Content-Type':'text/html'},'ascii');
    fs.createReadStream(`${__dirname}/404.html`).pipe(res);
  }
});

server.listen(port, ip);
console.log(`server ${ip} listening on port ${port}.`)
