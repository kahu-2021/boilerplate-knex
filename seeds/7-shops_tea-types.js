
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shops_tea-types').del()
    .then(function () {
      // Inserts seed entries
      return knex('shops_tea-types').insert([
        {shop_id : 1, teaType_id : 1},
        {shop_id : 1, teaType_id : 2},
        {shop_id : 1, teaType_id : 3},
        {shop_id : 1, teaType_id : 4},
        {shop_id : 1, teaType_id : 5},
        {shop_id : 1, teaType_id : 6},
        {shop_id : 1, teaType_id : 7},
        {shop_id : 1, teaType_id : 8},
        {shop_id : 1, teaType_id : 9},
        {shop_id : 1, teaType_id : 10},
        {shop_id : 1, teaType_id : 11},
        {shop_id : 1, teaType_id : 12},
        {shop_id : 1, teaType_id : 13},
        {shop_id : 1, teaType_id : 14},
        {shop_id : 2, teaType_id : 15},
        {shop_id : 2, teaType_id : 16},
        {shop_id : 2, teaType_id : 17},
        {shop_id : 2, teaType_id : 18},
        {shop_id : 2, teaType_id : 19},
        {shop_id : 2, teaType_id : 20},
        {shop_id : 2, teaType_id : 21},
        {shop_id : 2, teaType_id : 22}
      ]);
    });
};
