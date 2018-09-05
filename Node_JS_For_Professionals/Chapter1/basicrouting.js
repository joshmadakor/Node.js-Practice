const http = require('http');
const port = 1111;

var routes = {
  '/': function(request, response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write('Wow, welcome to the root');
    response.end('bye');
  },
  '/contact': function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write('Wow, this is the contact page.');
    response.end('bye bye');
  }
}

const server = http.createServer(function(request, response){
  if (request.url in routes){
    return routes[request.url](request, response)
  }
  response.writeHead(404);
  response.end(`sorry boss.. ${http.STATUS_CODES[404]}`);
});

server.listen(port);
