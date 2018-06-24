var http = require('http');
var url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.on('data', (data) => { console.log(data); });
  response.on('error', (error) => { console.log(error); });
}).on('error', console.error);
