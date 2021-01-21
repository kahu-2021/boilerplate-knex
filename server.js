const express = require('express')
const hbs = require('express-handlebars')
const handlebars = require('handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs',
                          defaultLayout: false,
                          layoutsDir: "views/layouts/"}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

// handlebars helpers
// handlebars.registerHelper("if", function(conditional, options) {
//   console.log("this = " + this + " options = " + options + " conditional: " + conditional)
//   if (conditional) {
//     console.log("this = " + this + "options = " + options)
//     return options.fn(this);
//   } else {
//     return options.inverse(this);
//   }
// });

module.exports = server
