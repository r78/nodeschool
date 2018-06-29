var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) { 
  var date = new Date();
  var now = strftime('%Y-%m-%d %H:%M', date);
  socket.end(now + "\n");
})

var port = process.argv[2];
server.listen(port)
