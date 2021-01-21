
exports.up = (knex, Promise) => {
    return knex.schema.createTable('toppings', (table) => {
        table.increments('id').primary()
        table.string('topping')
      })
  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('toppings')
};
