/*
This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/
const http = require('http');
const URL1 = process.argv[2];
const URL2 = process.argv[3];
const URL3 = process.argv[4];
var myUrls = [URL1, URL2, URL3];
var count  = 0;

function print_Http_Content(urlArray, count) {
  var content = "";
  if (count >= urlArray.length) { return; }
  http.get(myUrls[count], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      content += data;
    });
    response.on('end', function(data){
      count++;
      console.log(content);
      //console.log(count);
      print_Http_Content(myUrls, count)
    });
  });
}

print_Http_Content(myUrls, count);
