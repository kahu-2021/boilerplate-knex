
exports.up = (knex, Promise) => {
    return knex.schema.createTable('flavours_temperatures', (table) => {
        table.increments('id').primary()
        table.integer('flavour_id')
        table.integer('temperature_id')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('flavours_temperatures')
};
