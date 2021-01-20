exports.up = (knex, Promise) => {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('title')
    table.string('description')
    table.string('time_played')
    table.string('all_reviews')
    table.string('recent_reviews')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('games')
}