/*
   Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/

const http = require('http');
var   map  = require('through2-map');
const port = process.argv[2];
const file = process.argv[3];

var server = http.createServer(function(request, response){
    request.pipe(map(function(data) {
      return data.toString().toUpperCase()
    })).pipe(response);

});
server.listen(port);
