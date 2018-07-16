function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial
  var head = fn(initial, arr[0])
  var tail = arr.slice(1)
  return reduce(tail, fn, head)
}

module.exports = reduce
