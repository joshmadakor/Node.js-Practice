var fs = require('fs');
var path = process.argv[2];
var content = fs.readFile(path, function(error, data){
    console.log(data.toString().split('\n').length -1);
});
