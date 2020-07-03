const express = require('express')
const app = express()

function dateHash(id) {
  return require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
}

app.put('/message/:ID', function(req, res) {
  let id = req.params.ID;
  res.end(dateHash(id))
})
app.listen(process.argv[2])
