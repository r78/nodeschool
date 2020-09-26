const http = require('http');
const async = require('async');
const qs = require('querystring');
 
const hostname = process.argv[2];
const port = process.argv[3];

function createUser(n, next) {
  var postdata = JSON.stringify({'user_id': n});
  var post_options = {
    host: hostname,
    port: port,
    path: '/users/create',
    method: 'POST',
    headers: {
      'Content-Length': postdata.length
    }
  };
  var post_req = http.request(post_options, function(res){
    res.on('data', function(chunk) {});
    res.on('end', function(){
      next();
    });
  });
  post_req.on('error', function(err){
    next(err);
  });
  post_req.write(postdata);
  post_req.end();
}

async.series({
  post: function(done){
    async.times(5, function(n, next) {
      createUser(n + 1, function(err) {
          next(err);
      });
    }, function next(err) {
        if (err) return done(err);
        done(null, 'saved');
    });
  },

  get: function(done){
    var url = 'http://' + hostname + ':' + port + '/users';
    http.get(url, function(res){
      var body = '';
      res.on('data', function(chunk) {
        body += chunk.toString();
      });
      res.on('end', function(){  
        done(null, body);
      });
      }).on('error', done);
    }
  }, function done(err, result){
    if (err) return console.log(err);
    console.log(result.get);
});
