var http = require('http');
var url = process.argv[2];
var received = "";

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', (data) => { received += data; });
  response.on('error', (error) => { console.log(error); });
  response.on('end', (end) => {
    console.log(received.length);
    console.log(received);
  });
}).on('error', console.error);
