import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
  getAProduct,
 } from './productServices'


const initialState = {
    product: {}
}


export const getAProducT = createAsyncThunk('products/single', async (creds, thunkApi) => {
    try{
        const response = await getAProduct(creds)
        return response
    }catch(error){
        console.log(error.response)
        return error.response
    }
  })

  

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAProducT.fulfilled, (state, action) => {
      state.product = action.payload
      // console.log(state.product)
  })

  },
});

export const {} = singleProductSlice.actions

export default singleProductSlice.reducer