import { useState } from 'react'
import styled from "styled-components"

import { addToCart } from "../../features/cart/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Main = styled.div`
       width: 100%;
      @media(min-width: 768px){
        flex: 1;
        width: unset;
      }
`

const CartInput = styled.input`
      width: 100%;
      height: 40px;
      outline: 1px solid #333:
      font-size: 18px;

      @media(min-width: 768px){
        width: 90%;
      }
`

const ButtonWrapper = styled.div`
      padding: 12px 0;
`

const AddToCart = styled.button`
      background-color: red;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      outline: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
`
const CartAdd = () => {

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.singleProduct)


  const pushToCart = () => {

    if (quantity < 1) {
      alert("You must add at least quantity of 1")
      return
    }
    const cartItem = {
      ...product,
      quantity,
      uId: uuidv4()
    }

    dispatch(addToCart(cartItem))
  }

  return (
    <Main>
        <CartInput type="number" value={quantity} onChange={e => setQuantity(e.target.value)}/>

        <ButtonWrapper>
        <AddToCart onClick={pushToCart}>Add to cart</AddToCart>
        </ButtonWrapper>
    </Main>
  )
}

export default CartAdd