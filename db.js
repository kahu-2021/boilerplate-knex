const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserGames: getUserGames,
  getUserID: getUserID, 
  addGameToUser: addGameToUser,
  addUser: addUser,
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserGames(id, db = connection) {
  return db('users')
  .where('user_id', id)
  .join('games', 'users.id', 'games.user_id')
  .select('*', 'users.id AS user_id')
}

function getUserID(profileLink, db = connection) {
  return db('users')
  .where("profileLink", profileLink)
  .select()
}




//TESTING THINGS BELOW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//test function
function addGameToUser(id, title, description, time_played, recent_reviews,all_reviews, db = connection) {
  return db('games')
  .insert({user_id: id, title:title, description:description, time_played: time_played, all_reviews: all_reviews, recent_reviews: recent_reviews   })
}

function addUser(name, username, db = connection) {
  return db('users')
  .insert({name: name, username: username})
}

