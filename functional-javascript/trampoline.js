function repeat(operation, num) {
  if (num <= 0) return
  return function () {
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn, operation, num) {
  while (typeof fn === 'function') {
    return fn
  }
}

module.exports = function(operation, num) {
  return trampoline(repeat, operation, num)
}
