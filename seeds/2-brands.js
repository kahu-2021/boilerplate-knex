exports.seed = function (knex, Promise) {
  return knex('brands').insert([
    { id: 1, name: 'Cole Clark'},
    { id: 2, name: 'Taylor'},
    { id: 3, name: 'Takamine'},
    {id: 4, name:'Guild'}  
  ])
}
