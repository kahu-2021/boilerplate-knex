
exports.up = (knex, Promise) => {
    return knex.schema.createTable('flavours_sizes', (table) => {
        table.increments('id').primary()
        table.integer('flavour_id')
        table.integer('size_id')
      })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('flavours_sizes')
};
