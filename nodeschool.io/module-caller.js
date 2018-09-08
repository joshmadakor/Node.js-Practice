var ls = require('./module.js');
const dir = process.argv[2];
const ext = process.argv[3];

ls(dir, ext, function(error, list){
  if(error) {
    console.log(`There was an error: ${error}`);
  }
  list.forEach(function(item, elementNumber){
    console.log(`${item}`);
  });
});
