var fs = require('fs');

/*
//This cod will pause execution until the file has been fully readFile
var syncRead = fs.readFileSync('./fs.txt', 'ascii', function(err, data){
  console.log(`data2: ${data} error: ${err}`)
}); console.log('Wow, the text file has finish being read.')
*/

/*
//This code will continue with execution while the file is still being read
var read = fs.readFile('./fs.txt', 'ascii', function(err, data){
  fs.writeFileSync('./newFile.txt', data);
}); console.log('Wow, the text file is still being read');
*/

fs.unlink('./newFile.txt', function(err){
  console.log(err.errno);
});
