function repeat(operation, num) {
  for (; num > 0; num--)
    operation()
}

module.exports = repeat
