import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
}


// export const checkoutStripe = createAsyncThunk('checkout/stripe', async (creds, thunkApi) => {
//     try{

//     	const token = thunkApi.getState().auth.user.accessToken
//         const response = await sendStripeChkoutCredsToServer(creds, token)
//         return response

//     }catch(error){
//         console.log(error.response)
//         return error.response
//     }
// })


const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  
  },
});

export const { } = checkoutSlice.actions

export default checkoutSlice.reducer
