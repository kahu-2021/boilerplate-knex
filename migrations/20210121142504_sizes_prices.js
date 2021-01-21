
exports.up = (knex, Promise) => {
    return knex.schema.createTable('sizes_prices', (table) => {
        table.increments('id').primary()
        table.integer('size_id')
        table.integer('price_id')
      })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('sizes_prices')
};
