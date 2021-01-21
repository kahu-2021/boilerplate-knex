
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flavours').del()
    .then(function () {
      // Inserts seed entries
      return knex('flavours').insert([
        {flavour : "Original"},
        {flavour : "Jasmine"},
        {flavour : "Earl Grey"},
        {flavour : "Taro"},
        {flavour : "Matcha"},
        {flavour : "Egg"},
        {flavour : "Mango"},
        {flavour : "Peach"},
        {flavour : "Black Tea"},
        {flavour : "Green Tea"},
        {flavour : "Roast Rice"},
        {flavour : "Milk Tea"},
        {flavour : "Rose"},
        {flavour : "Chocolate"},
        {flavour : "Oolong"},
        {flavour : "Honey"}
      ]);
    });
};
