var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
});

function onReject (error) {
  console.log(error.message);
}

promise.then(null, onReject);
