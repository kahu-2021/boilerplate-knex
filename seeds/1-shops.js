exports.seed = function (knex, Promise) {
  return knex('shops').insert([
    {id: 1, name : "Noah's Ark", days_open : "Sunday-Monday"},
    {id: 2, name : "Gong Cha", days_open : "Sunday-Monday"},
    {id: 3, name : "Hi Tea!", days_open : "Sunday-Monday"},
    {id: 4, name : "Chatime", days_open : "Sunday-Monday"},
    {id: 5, name : "Tea Project", days_open : "Sunday-Monday"}
  ])
}
