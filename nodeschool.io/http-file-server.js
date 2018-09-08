/*
Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/
const http = require('http');
const fs   = require('fs');
const port = process.argv[2];
const file = process.argv[3];
const ip   = '127.0.0.1';

function display_File_Contents(port, ip, file) {
  var fileStream = fs.createReadStream(file);
  var server = http.createServer(function(request, response){
    fileStream.pipe(response);
  });
  server.listen(port, ip);
}

display_File_Contents(port, ip, file);
