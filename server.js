const express = require('express')
const hbs = require('express-handlebars')

const guitarRoutes = require('./routes/guitars')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', guitarRoutes)

module.exports = server
