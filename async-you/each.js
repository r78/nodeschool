const http = require('http');
const async = require('async');

function getUrl(url, done){
  http.get(url, function(res){
    res.on('data', function(chunk) {
    })
    res.on('end', function(chunk){  
     done(null);  
    });  
  }).on('error', function(err){
   done(err);
  });
}

const url1 = process.argv[2];
const url2 = process.argv[3];

async.each([url1, url2], function(item, done){
    getUrl(item, done);
  }, function(err){
    if(err) console.error(err);
  });
