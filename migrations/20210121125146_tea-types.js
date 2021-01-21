
exports.up = (knex, Promise) => {
    return knex.schema.createTable('tea-types', (table) => {
        table.increments('id').primary()
        table.string('tea_type')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tea-types')
};
