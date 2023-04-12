import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

// cart
// {
//     id: 1,
//     productName: 'dummy-product',
//     productImg: 'link'
//     price: 299,
//     quantity: 5
      //  uId: 'gdfgdfgdfgdfg'
// }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cartItems.push(action.payload)
    },

    removeCartItem: (state, action) => {
      let newState = state.cartItems.filter(item => item.uId !== action.payload.uId)
      state.cartItems = newState
    },

    modifyCartItems: (state, action) => {

      let modifiedCartItems = state.cartItems.map(item => {
        if(action.payload.uId === item.uId){
          item.quantity = action.payload.quantity
        }
        return item
      })

      state.cartItems = modifiedCartItems
    }

  }
});

export const { addToCart, removeCartItem, modifyCartItems } = cartSlice.actions

export default cartSlice.reducer