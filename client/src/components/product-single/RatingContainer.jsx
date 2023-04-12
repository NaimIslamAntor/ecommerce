import styled from "styled-components"
import Rating from "./Rating"
import { Ratingdatas } from "../../datas/RatingData"
const Container = styled.div`
    width: 100%;
    padding: 30px 0;
`
const Wrapper = styled.div`
    width: 90%;
`

const RatingContainer = () => {
  return (
    <Container>
        <Wrapper>
        {
            Ratingdatas.map(data => <Rating key={data.id} name={data.user.name} img={data.user.img} rating={data.rating} desc={data.desc} />)
        }
           
           
        </Wrapper>
    </Container>
  )
}

export default RatingContainer