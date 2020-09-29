const http = require('http');
const async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(total, number, done){
  var body = '';
  var url = process.argv[2] + '/?number=' + number;
  http.get(url, function(res){
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function(){  
      done(null, total + Number(body));
    });  
  }).on('error', done);
}, function done(err, result){
  if (err) return console.log(err);
  console.log(result)
});
