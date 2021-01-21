
exports.up = (knex, Promise) => {
    return knex.schema.createTable('tea-types_flavours', (table) => {
        table.increments('id').primary()
        table.integer('tea-type_id')
        table.integer('flavour_id')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tea-types_flavours')
};
