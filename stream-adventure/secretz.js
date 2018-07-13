var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var concat = require('concat-stream');

var cipher = process.argv[2]
var passphrase = process.argv[3]
var parser = tar.Parse()
var decipher = crypto.createDecipher(cipher, passphrase)
var gunzip = zlib.createGunzip()

parser.on('entry',  function (e) {
  if (e.type !== 'File' ) return e.resume()
  var md5Hash = crypto.createHash('md5', {encoding: 'hex'})
  e.pipe(md5Hash).pipe(concat(function (hash) {
    console.log(hash + ' ' + e.path);
  }))
})

process.stdin.pipe(decipher).pipe(gunzip).pipe(parser)
