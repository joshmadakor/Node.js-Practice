/*
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the
first argument to your program. For each connection you must write the
current date & 24 hour time in the format:

   "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be
zero-filled to 2 integers. For example:

   "2013-07-06 17:42"

After sending the string, close the connection.
*/
const net  = require('net');
const port = process.argv[2];
var date = new Date();

function get_Current_Date(){
  var year    = date.getFullYear();
  var month   = date.getMonth(); month++;
  var day     = date.getDate();
  var hours   = date.getHours();
  var minutes = date.getMinutes();
  var now     = "";

  month   = ('0' + month).slice(-2);
  day     = ('0' + day).slice(-2);
  hours   = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  now = `${year}-${month}-${day} ${hours}:${minutes}`
  return now;
}
var server = net.createServer(function (socket) {

  //console.log(`${get_Current_Date()}\n`);
  socket.end(`${get_Current_Date()}\n`);
});
server.listen(port)
