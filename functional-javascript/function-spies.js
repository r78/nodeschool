function Spy(target, method) {
  var originalMethod = target[method]
  var result = {count: 0}
  target[method] = function () {
    result.count++
    return originalMethod.apply(target, arguments)
  }
  return result;
}

module.exports = Spy
