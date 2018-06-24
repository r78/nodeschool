var fs = require('fs');
var file = process.argv[2];
function countLines(err, data) {
  if (err) {
    throw err;
  } else {
    var ct_lines = data.split('\n').length - 1;
    console.log(ct_lines);
  }
}

fs.readFile(file, 'utf8', countLines);
