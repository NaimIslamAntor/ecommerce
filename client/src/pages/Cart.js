import styled from "styled-components"
import { useSelector } from 'react-redux'
import CartItem from "../components/cart/CartItem"
import Checkout from '../components/cart/Checkout'



const Container  = styled.div`
      width: 100%;
      background-color: #fff;
`

const Wrapper = styled.div`
      width: 50%;
      margin: 0 auto;
`

const Cart = () => {
    const selector = useSelector(state => state.cart)
    const { cartItems } = selector

    return <Container>
               <Wrapper>
               {
                cartItems.map(item => (<CartItem
                    key={item.uId}
                    uId={item.uId}
                    productImgSrc={item.img}
                    productName={item.title}
                    productPrice={item.price}
                    productQty={item.quantity}
                />))
               }
               <Checkout/>
               </Wrapper>
           </Container>
}


export default Cart