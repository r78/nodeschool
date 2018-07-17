module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (accumulator, currentValue) {
    accumulator.push(fn.call(null, currentValue, null, arr))
    return accumulator
  }, [])
}
