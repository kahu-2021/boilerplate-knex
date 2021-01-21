
exports.up = (knex, Promise) => {
    return knex.schema.createTable('temperatures', (table) => {
        table.increments('id').primary()
        table.string('temperature')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('temperatures')
};

