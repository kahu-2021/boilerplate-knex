
exports.up = (knex, Promise) => {
    return knex.schema.createTable('prices', (table) => {
        table.increments('id').primary()
        table.string('price')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('prices')
};