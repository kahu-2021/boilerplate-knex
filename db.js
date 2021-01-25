const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getguitar: getguitar,
  getguitars: getguitars
}

function getguitars (db = connection) {
  return db('guitars').select()
}

function getguitar (id, db = connection) {
  return db('guitars').where('id', id).first()
}
