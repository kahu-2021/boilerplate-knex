
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        {topping : "Pearl"},
        {topping : "White Pearl"},
        {topping : "Mango Pearl"},
        {topping : "Lychee Pearl"},
        {topping : "Taro"},
        {topping : "Honey"},
        {topping : "Red Bean"},
        {topping : "Milk Foam"},
        {topping : "Aloe"},
        {topping : "Honey Aloe"},
        {topping : "Egg Pudding"},
        {topping : "Vanilla Ice Cream"},
        {topping : "Lychee Popping Bobba"},
        {topping : "Grape Jelly"},
        {topping : "Herbal Jelly"},
        {topping : "Coconut Jelly"},
        {topping : "Pudding Jelly"},
        {topping : "Ai-Yu Jelly"},
        {topping : "Basil Seeds"},
        {topping : "Oreo"}
      ]);
    });
};
