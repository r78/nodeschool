module.exports = function(namespace) {
  return function () {
    console.log.bind(console, namespace)
  }
}
