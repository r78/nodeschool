var through = require('through2')
var split = require('split')
var stream = through(write)

var ctLines = 0
function write (buffer, encoding, next) {
  if (ctLines % 2 == 0)
    this.push(buffer.toString().toLowerCase() + '\n')
  else
    this.push(buffer.toString().toUpperCase() + '\n')
  ctLines++
  next()
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout)
