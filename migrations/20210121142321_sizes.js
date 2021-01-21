
exports.up = (knex, Promise) => {
    return knex.schema.createTable('sizes', (table) => {
        table.increments('id').primary()
        table.string('size')
      })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('sizes')
};
