import styled from "styled-components"
import { useSelector } from "react-redux"

const Main = styled.div`
      width: 100%;
      @media(min-width: 768px){
        flex: 1;
        width: unset;
      }
`

const Image = styled.img`
      width: 100%;
      height: 300px;
      object-fit: cover; 
`

const Title = styled.h1`
      padding: 10px 0;
`

const Description = styled.p`
      line-height: 1.7;
`

const ProductPresntation = () => {
      const selector = useSelector(state => state.singleProduct)
      const { product } = selector

      console.log(selector)
  return (
    <Main>
       <Image src={product?.img} alt="Product-image" />
       <Title>{product?.title}</Title>
       <Description>{product?.desc}</Description>
    </Main>
  )
}

export default ProductPresntation