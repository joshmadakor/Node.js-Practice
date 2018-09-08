const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, list){
    var myArray = [];
    if (err) { return callback(err); }
    list.forEach(function(item, elementNumber){
      if ((item.substring(item.length - ext.length, item.length) === ext) && (item.indexOf('.') > -1)) {
        myArray.push(item);
      }
    });
    callback(err, myArray);
  });
}
