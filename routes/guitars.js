const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  // db.getguitars()
  //   .then(guitars => {
      res.render('index', {})
    })

router.get('/brands', (req, res) => {
  res.render('selectBrands', {})
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/brands', (req, res) => {
 let chosenBrand = req.body.brands
db.getGuitarBrands(chosenBrand)
.then(brand => {
console.log( brand)
  res.render("selectBrands", {brand: brand})
})
})

module.exports = router
