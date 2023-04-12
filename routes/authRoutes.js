//import modules
const express = require('express')


//import local modules
const { signInGoogle } = require('../controllers/authControllers')
const { signInVal } = require('../middlewares/authVal')

//initialization
const router = express.Router()


//routes

router.post('/signin/google', signInVal, signInGoogle)


module.exports = router