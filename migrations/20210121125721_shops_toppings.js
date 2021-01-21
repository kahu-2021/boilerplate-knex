
exports.up = (knex, Promise) => {
    return knex.schema.createTable('shops_toppings', (table) => {
        table.increments('id').primary()
        table.integer('shop_id')
        table.integer('topping_id')
        table.integer('price_id')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('shops_toppings')
};
