'use strict'
var f = first()
var s = f.then((secret) => second(secret))
s.then(console.log)
