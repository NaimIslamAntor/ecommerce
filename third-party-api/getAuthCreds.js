const axios = require('axios')

const getGoogleCreds = async (accessToken) => {
    try{
        const response = axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })

        return response

    }catch(error){
        return error
    }
}


module.exports = { getGoogleCreds }