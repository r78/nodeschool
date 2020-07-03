const express = require('express')
const app = express()
let path = process.argv[3] || path.join(__dirname, './public')

app.use(require('stylus').middleware(path))
app.use(express.static(path))
app.listen(process.argv[2])
