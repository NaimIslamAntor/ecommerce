

//import modules

//import local modules
const User = require('../models/User')
const { GOOGLE, createAccessToken } = require('../configs/authUtilities')
const { getGoogleCreds } = require('../third-party-api/getAuthCreds')



const signInGoogle = async (req, res, next) => {
    const { accessToken } = req.body
    let user

    try {
    
      const userCredentials  = await getGoogleCreds(accessToken)
      const { sub:socialId, name, email, picture:profilePicture } = userCredentials.data

        user = await User.findOne({email, socialId, fromWhere:GOOGLE})

        if (!user) {
            
             user = await User.create({
                name,
                email,
                profilePicture,
                socialId,
                fromWhere: GOOGLE,
            })
        }

        const jwtAccessToken = createAccessToken(user._id, accessToken)

        const response = {
            success: true,
            id: user._id,
            name,
            email,
            profilePicture,
            accessToken: jwtAccessToken,
        }

        res.json(response)

    } catch (error) {
        console.log(error.message);
        next(error)
    }
}


module.exports = { signInGoogle }