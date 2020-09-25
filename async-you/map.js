const http = require('http');
const async = require('async');

function getUrl(url, done){
  var body = '';
  http.get(url, function(res){
    res.on('data', function(chunk) {
      body += chunk.toString();
    })
    res.on('end', function(){  
      return done(null, body);  
    });  
  });
}

const url1 = process.argv[2];
const url2 = process.argv[3];

async.map([url1, url2], function(item, done){
    getUrl(item, done);
  }, function done(err, results){
    if (err) return console.log(err);
    console.log(results);
});
