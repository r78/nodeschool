var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

function filteredLS(err, list) {
  if (err) {
    throw err;
  } else {
    list.forEach(function (file) {
      console.log(file);
    });
  }
}

mymodule(dir, ext, filteredLS);
