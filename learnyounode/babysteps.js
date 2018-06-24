function print(acc, x) {
  return Number(x) + acc;
}
var total = 0;
var sum  = process.argv.splice(2).reduce(print, total);
console.log(sum);
