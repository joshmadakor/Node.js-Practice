var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
buffer = buffer.split('\n');
console.log(buffer.length -1);
