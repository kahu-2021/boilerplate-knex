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

  return db('guitars').join('brands', 'brand.id', 'guitars.brand_id').where('brand', brand).select('*', 'brands.id AS id')


}