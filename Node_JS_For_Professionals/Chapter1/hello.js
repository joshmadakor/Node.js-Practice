const http = require('http');

var server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.write('Hello Earth.\n');
  response.end();
});

server.listen(1111);
