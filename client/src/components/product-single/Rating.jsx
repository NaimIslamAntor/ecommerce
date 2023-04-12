import styled from "styled-components"
import StarIcon from '@mui/icons-material/Star'

const Main = styled.div`
      padding: 20px 0;
`

const BlockImageName = styled.div`
      display: flex;
      align-items: center;
      padding-bottom: 8px;
`

const BlockWrapper = styled.div``

const Name = styled.h4`
      padding-left: 7px;
`
const Image = styled.img`
      width: 50px;
      height: 50px;
      border-radius: 50%;
`

const Description = styled.p`
      line-height: 1.5;
      padding-top: 8px;
`

const Rating = ({ name, img, rating, desc }) => {

    const ratingArray = Array.from(Array(rating).keys())

  return (
    <Main>
       
        <BlockImageName>
           <Image src={img} alt={name}/>
           <Name>{name}</Name>
        </BlockImageName>
        
        <BlockWrapper>
             {
            ratingArray.map(rate =>  <StarIcon key={rate} style={{color: 'yellow'}}/>)
            }
        </BlockWrapper>


       
        <BlockWrapper>
            <Description>{desc}</Description>
        </BlockWrapper>

    </Main>
  )
}

export default Rating