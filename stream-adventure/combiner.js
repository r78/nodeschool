var combine = require('stream-combiner')
var through = require('through2')
var split = require('split')
var zlib = require('zlib')

module.exports = function () {
  var genre = {name: "", books: []}

  function write(buf,  _, next){
    if (buf.length === 0) return next()
    var line = JSON.parse(buf.toString())

    if (line.type === 'genre') {
      if (genre.name !== '') {
        this.push(JSON.stringify(genre) + '\n')
        genre = {name: "", books: []}
      }
      genre.name = line.name
    } else if (line.type === 'book') {
      genre.books.push(line.name)
    }
    next()
  }

  function end(next) {
    this.push(JSON.stringify(genre))
    next()
  }

  var group = through(write, end)
  return combine(split(), group, zlib.createGzip());
}
