exports.up = (knex, Promise) => {
  return knex.schema.createTable('guitars', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('brand_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('guitars')
}
