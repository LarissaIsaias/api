
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())

app.use('/produtos', routes)

app.listen(5000)
