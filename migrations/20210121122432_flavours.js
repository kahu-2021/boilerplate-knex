exports.up = (knex, Promise) => {
    return knex.schema.createTable('flavours', (table) => {
        table.increments('id').primary()
        table.string('flavour')
      })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('flavours')
};
