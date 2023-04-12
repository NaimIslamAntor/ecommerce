//import modules
const jwt = require('jsonwebtoken')
const User = require('../models/User')
//import local modules
const errorStructure = require('../configs/errorStructure')

const signInVal = async (req, res, next) => {
    const { accessToken } = req.body

    const errors = []

    if(!accessToken){
        errors.push('Credential error')
    }


    if(errors.length > 0){
        return next(errorStructure(422, errors))
    }

    next()
}




//protect routes
const protect = (req, res, next) => {
    const auth = req.headers.authorization

    // console.log(auth)
    if (!auth) {
        return next(errorStructure(401, [{message: 'You are unauthenticated!'}]))
    }

    if(!auth.startsWith('Bearer')){
        return next(errorStructure(401, [{message: 'You are unauthenticated!'}]))
    }

    const token = auth.split(' ')[1]

    jwt.verify(token, process.env.AUTH_TOKEN_SECRET, async (error, user) => {
        if (error) {
            return next(errorStructure(401, [{message: 'Token is not valid!'}]))
        }

        req.user = await User.findById(user._id)

        next()
    })
}



module.exports = { signInVal, protect }