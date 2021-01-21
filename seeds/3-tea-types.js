
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tea-types').del()
    .then(function () {
      // Inserts seed entries
      return knex('tea-types').insert([
        {tea_type: "Milk Tea - Tea Base"},
        {tea_type: "Milk Tea - Soy Creamer Base"},
        {tea_type: "Fresh Tea - Fruity Black/Green Tea"},
        {tea_type: "Fresh Tea - Ice Tea"},
        {tea_type: "Speciality - Milk Tea"},
        {tea_type: "Speciality - Green Tea"},
        {tea_type: "Speciality - Black Tea"},
        {tea_type: "Speciality - Honey"},
        {tea_type: "Red Bean"},
        {tea_type: "Green Bean"},
        {tea_type: "Tea Latte"},
        {tea_type: "Milk Foam"},
        {tea_type: "Brown Sugar"},
        {tea_type: "Winter Melon"},
        {tea_type: "Gong Cha Signature"},
        {tea_type: "Brewed Tea"},
        {tea_type: "Health Tea"},
        {tea_type: "Fresh Milk Series"},
        {tea_type: "Yogurt Drink Series"},
        {tea_type: "Milk Tea"},
        {tea_type: "Creative Mix"},
        {tea_type: "Smoothie Series"},
      ]);
    });
};
