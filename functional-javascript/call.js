function duckCount() {
  return Array.prototype.filter.call(arguments, function (o) {
    return Object.prototype.hasOwnProperty.call(o, 'quack') === true
  }).length
}

module.exports = duckCount
