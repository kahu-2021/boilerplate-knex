
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      return knex('addresses').insert([
        {address : "79 Manners Street, Te Aro, Wellington", shop_id : 1, times_open : "11:30am - 7:00pm"},
        {address : "2/93 Courtenay Place, Te Aro, Wellington", shop_id : 1, times_open : "Monday - Thursday: 11:30am - 7:30pm | Friday - Saturday: 11:30am - 10:00pm | Sunday: 11:30am - 7pm"},
        {address : "128 Cuba Street, Te Aro, Wellington", shop_id : 1, times_open : "11:30am - 7:00pm"},
        {address : "57 Manners Street, Te Aro, Wellington", shop_id : 2, times_open : "10:00am - 9:00pm"},
        {address : "336 Lambton Quay, Wellington Central, Wellington", shop_id : 2, times_open : "Monday - Friday: 10:00am - 7:00pm | Saturday - Sunday: 9:00am - 6:00pm"},
        {address : "195 Cuba Street, Te Aro, Wellington", shop_id : 3, times_open : "Sunday - Wednesday: 11:30am - 6:30pm | Thursday - Saturday: 11:00am - 7:00pm"},
        {address : "15 Courtenay Place, Te Aro, Wellington", shop_id : 4, times_open : "Sunday - Thursday: 12:00pm - 10:00pm | Friday - Saturday: 12:00pm - 11:00pm"},
        {address : "149 Cuba Street, Te Aro, Wellington", shop_id : 5, times_open : "Sunday - Thursday: 12:00pm - 6:00pm | Friday - Saturday: 12:00pm - 8:00pm"},
      ]);
    });
};
