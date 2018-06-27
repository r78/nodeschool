var http = require('http');
var arr_results = [];
var count = 0;

function print_urls() {
  for (var i = 0; i < 3; i++) {
    console.log(arr_results[i]);
  }
}

function get_url(index) {
  var received = "";
  http.get(process.argv[2 + index], function (response) {
    response.setEncoding('utf8');
    response.on('data', (data) => { received += data; });
    response.on('error', (error) => { console.log(error); });
    response.on('end', (end) => {
      arr_results[index] = received;
      count++;
      if (count == 3) {
        print_urls();
      }
    });
  }).on('error', console.error);
}

for (var i = 0; i < 3; i++) {
  get_url(i);
}
