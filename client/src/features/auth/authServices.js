import axios from 'axios'

const api = '/auth/signin'

const sendGoogleCredsToServer = async (creds) => {
    const response = await axios.post(`${api}/google`, creds)
    return response
    
}


export { 
    sendGoogleCredsToServer,
 }