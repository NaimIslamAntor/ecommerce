//import modules
const jwt = require('jsonwebtoken')

const GOOGLE = 'GOOGLE'

const createAccessToken = (id, accessToken) => {
    const tokenCreds = {
        _id: id,
        accessToken,
        
    }

    const token = jwt.sign(tokenCreds, process.env.AUTH_TOKEN_SECRET, {expiresIn: '365d'})

    return token
}


module.exports = { GOOGLE, createAccessToken }