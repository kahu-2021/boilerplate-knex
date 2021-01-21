
exports.up = (knex) => {
    return knex.schema.createTable('addresses', (table) => {
        table.increments('id').primary()
        table.string('address')
        table.int('shop_id')
        table.string('times_open')
      })
};

exports.down = (knex) => {
    return knex.schema.dropTable('addresses')
};
