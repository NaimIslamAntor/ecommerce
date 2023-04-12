import { useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'

import { Productdatas } from '../../datas/ProductData'

import { useSelector, useDispatch } from 'react-redux'
import { getProductsAll } from '../../features/product/productSlice'

const Container = styled.div`
    width: 100%;
    padding: 30px 0;
`
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
`

const Heading = styled.h1`
      font-size: 30px;
      color: #333;
      padding: 20px;
      text-align: center;
      text-transform: capitalize;
`
const ProductContainer = () => {
  
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {

    if(products.length === 0){
      dispatch(getProductsAll())
    }

  }, [])

  
  return (
    <Container>
      <Heading>Best Products for you</Heading>
        <Wrapper>
          {
            products.map(data => <Product key={data._id} id={data._id} img={data.img} title={data.title} price={data.price} rating={data.rating}/>)
          }
        </Wrapper>
    </Container>
  )
}

export default ProductContainer