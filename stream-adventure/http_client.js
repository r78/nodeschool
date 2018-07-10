var request = require('request');
var src = process.stdin
var dst = process.stdout
var r = request.post('http://localhost:8099/');
src.pipe(r).pipe(dst)
