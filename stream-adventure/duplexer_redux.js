var through = require('through2');
var duplexer2 = require("duplexer2");

module.exports = function (counter) {
  var occurrences = {}
  var stream = through.obj(write, end)
  return duplexer2({objectMode: true}, stream, counter);

  function write(obj, _, next) {
    var country = obj.country;
    if (occurrences[country]) {
      occurrences[country] = occurrences[country] + 1
    } else {
      occurrences[country] = 1
    }
    next()
  }
  function end() {
    counter.setCounts(occurrences)
  }
};
