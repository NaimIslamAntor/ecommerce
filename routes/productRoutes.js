//import modules
const express = require('express')


//import local modules
const { 
    products,
    product,
 } = require('../controllers/productController')


//initialization
const router = express.Router()


//routes
router.get('/all', products)
router.get('/all/:id', product)


module.exports = router