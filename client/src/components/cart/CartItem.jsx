import { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { removeCartItem, modifyCartItems } from '../../features/cart/cartSlice'

const CartContainer = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 20px;
      margin:20px 0;
`
const CartImageWrapper = styled.div`
      flex-basis: 50%;
`
const CartImage = styled.img`
      width: 220px;
      object-fit: cover;
`

const CartItemName = styled.h1`
      font-size: 25px;
      color: #444;
      ${'' /* text-align: center; */}
`

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
      margin: 5px;
`


const CartItem = ({ uId, productImgSrc, productName, productPrice, productQty }) => {

      const dispatch = useDispatch()

      const [quantity, setQuantity] = useState(productQty)

      const removeItemsFromCart = () => {
            let payload = {
                  uId: uId
            }

            dispatch(removeCartItem(payload))
      }

      const modifyItemsFromCart = () => {
            if(quantity < 1){
                  alert('Quantiy is not valid')
                  return
            }
            
            let payload = {
                  uId: uId,
                  quantity,
            }

            dispatch(modifyCartItems(payload))

      }

  return (
    <CartContainer>
      <CartImageWrapper>
        <CartImage 
        src={productImgSrc}
        alt={productName}
        />

        <CartItemName>{productName}</CartItemName>
        <CartItemName>Price {productPrice}$</CartItemName>

      </CartImageWrapper>

      <CartImageWrapper>

      <Main>
        <CartInput type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}/>

        <ButtonWrapper>
        <AddToCart onClick={() => modifyItemsFromCart()}>Modify</AddToCart>
        <AddToCart onClick={() => removeItemsFromCart()}>Remove</AddToCart>
        </ButtonWrapper>
     </Main>

      </CartImageWrapper>

    </CartContainer>
  )
}

export default CartItem