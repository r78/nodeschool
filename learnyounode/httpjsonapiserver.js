var http = require('http')
var url = require('url')
var map = require('through2-map')

function pad(num) {
  if (num < 10)
    return '0' + num;
  else 
    return num;
}

function parseTime(date) {
  return {
    hour: pad(date.getHours()),
    minute: pad(date.getMinutes()),
    second: pad(date.getSeconds())
  };
}

function unixTime(date) {
  var unixtime = date.getTime();
  return {unixtime: unixtime};
}

var server = http.createServer(function (req, res) { 
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);
  var path = parsedUrl.pathname;

  if (path === '/api/parsetime') {
    var result = JSON.stringify(parseTime(date));
  } else if (path === '/api/unixtime') {
    var result = JSON.stringify(unixTime(date));
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(result);
    res.end();
  } else {
    res.writeHead(501);
    res.end();
  }
});

var port = process.argv[2];
server.listen(port)
