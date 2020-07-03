const express = require('express')
const app = express()
app.get('/search', function(req, res) {
  const params = req.query
  res.send(params)
})
app.listen(process.argv[2])
