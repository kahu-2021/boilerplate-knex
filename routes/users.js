const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
//shows profile
router.get('/games/:id', (req, res) => {
  let id = req.params.id
  db.getUserGames(id)
    .then(games => {
      // console.log(games)
      res.render('usersGames', {games: games})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


// HELPFUL THINGS FOR TESTING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//testing purposes
router.get("/addGame", (req, res) => {

  res.render("addGame", {})
})
//testing purposes
router.post("/addGame", (req, res) => {
  let newUser = {
    profileLink: req.body.profileLink,
    title: req.body.title,
    description: req.body.description,
    time_played: req.body.time_played,
    recent_reviews: req.body.recent_reviews,
    all_reviews: req.body.all_reviews
  }
  
  db.getUserID(newUser.profileLink) 
  .then((result1) => {
    // console.log(result1[0].id)
    db.addGameToUser(result1[0].id, newUser.title, newUser.description, newUser.time_played, newUser.recent_reviews, newUser.all_reviews)
      .then(() => {
          res.redirect("/")
      })
  })
  })
      
      


router.get("/addGameAndPerson", (req, res) => {

  res.render("addPersonAndGame", {})
})
//testing purposes
router.post("/addGameAndPerson", (req, res) => {
  let newUser = {
    profileLink: req.body.profileLink,
    name: req.body.name,
    username: req.body.username,
    title: req.body.title,
    description: req.body.description,
    time_played: req.body.time_played,
    recent_reviews: req.body.recent_reviews,
    all_reviews: req.body.all_reviews
  }
  
  db.addUser(newUser.name,newUser.username)
    .then((result1) => {
        db.addGameToUser(result1[0], newUser.title, newUser.description, newUser.time_played, newUser.recent_reviews, newUser.all_reviews)
      .then(() => {
          res.redirect("/")
        })
      })
      
})



module.exports = router
