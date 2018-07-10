var http = require('http');
var through = require('through2');
var stream = through(uppercase)

function uppercase (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);
  }
});

server.listen(process.argv[2]);
