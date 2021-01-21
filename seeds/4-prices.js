
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prices').del()
    .then(function () {
      // Inserts seed entries
      return knex('prices').insert([
        {price : 7},
        {price : 6},
        {price : 6.50},
        {price : 7.50},
        {price : 1},
        {price : 5.40},
        {price : 5.80},
        {price : 6.40},
        {price : 6.80},
        {price : 4.60},
        {price : 5.60},
        {price : .70},
        {price : .80},
        {price : .90},
        {price : 1.10},
        {price : 1.20},
      ]);
    });
};
