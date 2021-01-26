const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getguitar: getguitar,
  getguitars: getguitars,
  getGuitarBrands: getGuitarBrands
}

function getguitars (db = connection) {
  return db('guitars').select()
}

function getguitar (id, db = connection) {
  return db('guitars').where('id', id).first()
}

function getGuitarBrands (brand, db = connection) {

  return db('guitars').join("brands", "brands.id", "guitars.brand_id").select("guitars.id as id", "brands.name as brand_name", "guitars.name as guitar_name").where("brands.name", brand)

}