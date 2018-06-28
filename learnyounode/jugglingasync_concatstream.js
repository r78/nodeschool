var http = require('http');
var concatStream = require('concat-stream')  
var arr_results = [];
var count = 0;

function print_urls() {
  for (var i = 0; i < 3; i++) {
    console.log(arr_results[i]);
  }
}

function get_url(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(concatStream(function (data) {
      data = data.toString();
      arr_results[index] = data;
      count++;
      if (count == 3) {
        print_urls();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  get_url(i);
}
