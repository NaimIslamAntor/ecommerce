import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductPresntation from '../components/product-single/ProductPresntation'
import CartAdd from '../components/product-single/CartAdd'
import RatingForm from '../components/product-single/RatingForm'
import RatingContainer from '../components/product-single/RatingContainer'
import { useDispatch } from 'react-redux'
import { setSingleProduct, resetSingleProduct } from '../features/product/productSlice'
import { getAProducT } from '../features/product/singleProductSlice'
import {Productdatas} from '../datas/ProductData'

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

const ProductSIngle = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  // console.log(typeof id)

  useEffect(() => {
    // const product = Productdatas.find(data => data.id === parseInt(id))
    // console.log(product);
    dispatch(getAProducT(id))

    // return () => {
      // dispatch(resetSingleProduct())
    // }

  },[id])

  return (
    <Container>
      <Wrapper>
           <ProductPresntation />
           <CartAdd/>
           <RatingForm/>
           <RatingContainer/>
      </Wrapper>
    </Container>
  )
}

export default ProductSIngle