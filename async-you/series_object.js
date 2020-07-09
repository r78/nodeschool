const fs = require('fs')
const http = require('http')
const async = require('async')

const url1 = process.argv[2];
const url2 = process.argv[3];

function getUrl(url, done){
  var body = '';
  http.get(url, function(res){
    res.on('data', function(chunk) {
      body += chunk.toString();
    })
    res.on('end', function(chunk){  
     done(null, body);  
    });  
  }).on('error', function(err){
   done(err);
  });
}

async.series({  
    requestOne: function(done){  
       getUrl(url1, done);
     },  
    requestTwo: function(done){
       getUrl(url2, done);
    }  
  }, function(err, results){  
   console.log(results);  
  }
);  
