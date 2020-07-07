'use strict';

function alwaysThrows() {
  const error = new Error("OH NOES");
  throw error;
}

function iterate(i){
  console.log(i);
  return i + 1;
}

function onReject (error) {
  console.log(error.message);
}

Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject)
