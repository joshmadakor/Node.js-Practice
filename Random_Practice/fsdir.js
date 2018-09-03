var fs = require('fs');

//fs.mkdirSync('dump');
//fs.rmdirSync('dump');


/*
//Create directory, read a file, write contents to new directory
fs.mkdir('test', function(){
  fs.readFile('./ipconfig.txt', 'ascii', function(err,data){
    fs.writeFile('./test/output.txt', data);
  });
});
*/

fs.unlink('./test/output.txt', function(err){
  console.log(err);
  fs.rmdir('test', function(err){
    console.log(err);
  });
});
//fs.rmdir('tump');
