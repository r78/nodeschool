var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) { 
  var file = process.argv[3];
  var src = fs.createReadStream(file)
  res.writeHead(200, { 'content-type': 'text/plain' })
  src.pipe(res)
})

var port = process.argv[2];
server.listen(port)
