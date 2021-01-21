
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shops_toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops_toppings').insert([
        {shop_id: 1, topping_id: 1},
        {shop_id: 1, topping_id: 5},
        {shop_id: 1, topping_id: 6},
        {shop_id: 1, topping_id: 7},
        {shop_id: 1, topping_id: 8},
        {shop_id: 1, topping_id: 11},
        {shop_id: 1, topping_id: 12},
        {shop_id: 1, topping_id: 13},
        {shop_id: 1, topping_id: 14},
        {shop_id: 2, topping_id: 2},
        {shop_id: 2, topping_id: 3},
        {shop_id: 2, topping_id: 4},
        {shop_id: 2, topping_id: 8},
        {shop_id: 2, topping_id: 9},
        {shop_id: 2, topping_id: 15},
        {shop_id: 2, topping_id: 16},
        {shop_id: 2, topping_id: 17},
        {shop_id: 2, topping_id: 18},
        {shop_id: 2, topping_id: 19},
        {shop_id: 2, topping_id: 20},
      ]);
    });
};
