const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const todo = require('./route/todo')

app.get('/', (req, res) => {
  res.send('Server Worked')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(todo)
app.listen(5000)
