const express = require('express')
const fs = require('fs')
const app = express()

app.get('/books', function(req, res) {
  const filename = process.argv[3]
  const contents = fs.readFile(filename, (err, data) => {
    if (err) return res.sendStatus(500)
    object = JSON.parse(data)
    res.json(object)
  })
})
app.listen(process.argv[2])
