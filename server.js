//load env file
// if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
// }

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//import modules
const express = require('express')
const cors = require('cors')

//import local modules
const { dbConnection } = require('./configs/dbConnection')
const errorHandler = require('./configs/errorHandler')


//import routes
const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
//initializations
const app = express()


//use global middlewares
app.use(express.json())
app.use(cors())
//global varriables
const port = process.env.PORT || 5000


//register routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/checkout', checkoutRoutes)


//add error handler middleware
app.use(errorHandler)

//start the server
app.listen(port, () => {
    dbConnection()
    console.log(`server running on port: ${port}`)
})