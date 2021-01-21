
exports.up = (knex, Promise) => {
    return knex.schema.createTable('shops_tea-types', (table) => {
        table.increments('id').primary()
        table.integer('shop_id')
        table.integer('teaType_id')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shops_tea-types')
};
