var promise1 = Promise.resolve('SECRET VALUE')
promise1.then(console.log)
var promise2 = Promise.reject(new Error('SECRET ERROR'))
function onReject (error) {
  console.log(error.message);
}
promise2.catch(onReject)
