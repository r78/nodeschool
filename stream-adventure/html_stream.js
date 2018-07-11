var through = require('through2');
var trumpet = require('trumpet');
var tr = trumpet();
var stream = tr.select('.loud').createStream();

function uppercase(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

stream.pipe(through(uppercase)).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout)
