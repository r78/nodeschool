const fs = require('fs')
const http = require('http')
const async = require('async')

let filename = process.argv[2];

async.waterfall([
  function(cb){
    fs.readFile(filename, function(err,data){
      if (err) return cb(err)
      cb(null, data)
    })
  },
  function(data, cb){
    var body = '';
    http.get(data.toString(), function(res){
      res.on('data', function(chunk){  
        body += chunk.toString();
      })
      res.on('end', function(){  
        cb(null, body);  
      });  
    }).on('error', function(err){
      cb(err)
    })
  }], function(err, result) {
    if (err) return console.error(err);
    console.log(result)
  })
