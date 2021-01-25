const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getguitars()
    .then(guitars => {
      res.render('index', {guitars: guitars})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/brands', (req, res) => {
  db.getGuitarBrands()
    .then(guitars => {
      res.render('index', {guitars: guitars})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
