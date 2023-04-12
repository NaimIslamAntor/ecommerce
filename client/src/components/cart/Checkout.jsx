// import React from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux"
import axios from 'axios'


const CartContainer = styled.div`
      width: 100%;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 30px;
      margin: 20px 0;
      display: grid;
      place-items: center;
`

const PriceHeading = styled.h2`
      color: #555;
      margin-bottom: 5px;
`

const CheckoutBtn = styled.button`
      background-color: orange;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      outline: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      margin: 5px;
`


const Checkout = () => {

    let selector = useSelector(state => state.cart)
    let { cartItems } = selector

    let { isAuthenticated, user } = useSelector(state => state.auth)
 

    const calculatePrices = () => {
        let price = 0
        console.log(cartItems)

        for(let item of cartItems){
            let { price:Price, quantity } = item
            let multiply = Price*quantity
            price +=multiply
        }

        return price
    }


    const stripeCheckout = async () => {

        let creds = {datas: cartItems.map(item => {
            let { _id, quantity } = item
            return {
                _id,
                quantity,
            }
        })}

        
     const config = {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    }

    console.log(user.accessToken)

    try{

    let response = await axios.post(`/checkout/stripe`, creds, config)

    let { sessionUrl } = response.data

    window.location = sessionUrl

    }catch (error){
        alert(error.message)
    }


    }

  return (
    <CartContainer>

            <PriceHeading>Total Price: {calculatePrices()}$</PriceHeading>
            
            <CheckoutBtn onClick={isAuthenticated ? () => stripeCheckout() : 

            () => alert('Please Login first to checkout')}>Checkout</CheckoutBtn>

    </CartContainer>
  )
}

export default Checkout