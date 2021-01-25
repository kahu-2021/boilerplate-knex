exports.seed = function (knex, Promise) {
  return knex('guitars').insert([
    { id: 1, name: 'Fat Lady 1', brand_id:1},
    { id: 2, name: 'Angel', brand_id:1},
    { id: 3, name: 'GS-Mini', brand_id:2 },
    {id: 4, name:"C90", brand_id: 3}, 
    {id: 5,  name:"Pro", brand_id: 4}  

  ])
}
