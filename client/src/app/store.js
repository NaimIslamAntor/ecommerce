import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/product/productSlice'
import authReducer from '../features/auth/authSlice'
import singleProductReducer from '../features/product/singleProductSlice'
// import checkoutReducer from '../features/Checkout/authSlice'
// import { setupListeners } from '@reduxjs/toolkit/query'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// import {
  // persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
// } from 'redux-persist'
// import persistReducer from 'redux-persist/es/persistReducer';



let persistConfig = {
  key: 'root',
  version: 1,
  blackList:['productReducer', 'singleProductReducer', 'checkoutReducer'],
  storage,
}


let rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
  singleProduct: singleProductReducer,
  // checkout: checkoutReducer,
})


let persistReducers = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistReducers
  // {
    // products: productReducer,
    // ...persistReducers,
  // },
});

console.log(persistReducers)


// const persistStoreSave = configureStore({
  // reducer: persistReducers,
// })

export { store }