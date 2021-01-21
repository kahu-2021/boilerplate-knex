exports.up = (knex, Promise) => {
  return knex.schema.createTable('shops', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('days_open')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shops')
}
