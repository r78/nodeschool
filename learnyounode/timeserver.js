var net = require('net')

function pad(num) {
  if (num < 10)
    return '0' + num;
  else 
    return num;
}

var server = net.createServer(function (socket) { 
  var date = new Date();
  var year = date.getFullYear();
  var month = pad(date.getMonth() + 1);
  var day = pad(date.getDate());
  var hour = pad(date.getHours());
  var minutes = pad(date.getMinutes()); 
  socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + "\n");
})

var port = process.argv[2];
server.listen(port)
