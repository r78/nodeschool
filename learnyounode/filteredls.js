var fs = require('fs');
var path = require('path');
var dir = process.argv[2];

function filteredLS(err, list) {
  var ext = '.' + process.argv[3];
  if (err) {
    return console.error(err);
  } else {
    list.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  }
}

fs.readdir(dir, filteredLS);
