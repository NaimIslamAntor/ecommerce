import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//import services
import { sendGoogleCredsToServer } from './authServices'
const initialState = {
    isAuthenticated: false,
    user: null,
    isSuccess: false,
    errors: []
}

export const googleSignInThunk = createAsyncThunk('signin/google', async (creds, thunkApi) => {
    try{
        const response = await sendGoogleCredsToServer(creds)
        return response
    }catch(error){
        console.log(error.response)
        return error.response
    }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(googleSignInThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const { success, id, name, email,
        profilePicture,
        accessToken } = action.payload.data

        if (success) {
            state.isSuccess = true
            state.isAuthenticated = true
            state.user = {
                id,
                name,
                email,
                profilePicture,
                accessToken
            }
            return
        }

        state.isSuccess = false
        state.isAuthenticated = false
        state.user =null
        state.errors.push(action.payload.data.errors)


    })
  },

});

export const {} = authSlice.actions

export default authSlice.reducer