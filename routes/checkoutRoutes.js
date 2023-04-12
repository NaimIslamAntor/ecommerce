//import modules
const express = require('express')


//import local modules
const { protect } = require('../middlewares/authVal')
const { 
   stripeCheckout,
   stripeCheckoutWebhook,
 } = require('../controllers/checkoutControllers')


//initialization
const router = express.Router()


//routes
router.post('/stripe', protect, stripeCheckout)

router.post('/stripe/webhook', express.raw({type: 'application/json'}), stripeCheckoutWebhook)


module.exports = router