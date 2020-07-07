'use strict';

function all(p1, p2) {
  return new Promise(function (fulfill, reject) {
    var i = 0;
    var values = []
    p1.then(function (val) {
      values[0] = val;
      i++;
      if (i >= 2) {
        fulfill(values);
      }
    })
    p2.then(function (val) {
      values[1] = val;
      i++;
      if (i >= 2) {
        fulfill(values);
      }
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log)
