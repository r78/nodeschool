function repeat(operation, num) {
  if (num == 0) return;
  operation()
  return(operation, num--)
}

module.exports = repeat
