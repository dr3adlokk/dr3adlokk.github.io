var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, '/app')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/app/index.html'))
})
var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})