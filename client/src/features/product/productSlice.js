import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { Productdatas } from '../../datas/ProductData'

import { 
  getProducts,
  getAProduct,
 } from './productServices'

const initialState = {
    products: [],
    errors: [],
}



export const getProductsAll = createAsyncThunk('products/all', async (thunkApi) => {
  try{
      const response = await getProducts()
      return response
  }catch(error){
      console.log(error.response)
      return error.response
  }
})





const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload
    },
    resetSingleProduct: (state) => {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProductsAll.fulfilled, (state, action) => {
        state.products = [...action.payload.data]
    })
  //   .addCase(getAProducT.fulfilled, (state, action) => {
  //     state.singleProduct = action.payload
  //     console.log(state.singleProduct)
  // })

  },
}

});

export const {setSingleProduct, resetSingleProduct} = productSlice.actions

export default productSlice.reducer