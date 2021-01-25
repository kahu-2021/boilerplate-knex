exports.seed = function (knex, Promise) {
  return knex('guitars').insert([
    { id: 99901, name: 'test guitar 1', email: 'test1@guitars.net' },
    { id: 99902, name: 'test guitar 2', email: 'test2@guitars.net' },
    { id: 99903, name: 'test guitar 3', email: 'test3@guitars.net' }
  ])
}
