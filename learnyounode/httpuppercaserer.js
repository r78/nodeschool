var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) { 
  var body = ""
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

var port = process.argv[2];
server.listen(port)
