import { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { Sliderdatas } from '../../datas/SliderData';

const Container = styled.div`
      width: 100%;
      height: calc(100vh - 60px);
      margin-top: 20px;
      position: relative;
`

const Wrapper = styled.div`
     width: 90%;
     height: 100%;
     margin: 0 auto;
     /* display: flex;*/
      overflow: hidden; 
`

const SliderContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      transition: 500ms linear;
      transform: translateX(${props => -props.slideIndex * 100}%);
`

const Slide = styled.div`
    min-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 768px){
      flex-direction: row;
      }
`

const SlideChangeBtn = styled.button`
      border: none;
      outline: none;
      background-color: #f7f7f7;
      position: absolute;
      ${props => props.direction && props.direction}: 10px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
`

const Image = styled.img`
      width: 50%;
      height: 100%;
      object-fit: cover;
`

const SlideContent = styled.div`
      width: 50%;
`

const SlideHeading = styled.h3`
      text-align: center;
      font-size: 25px;
      @media(min-width: 768px){
      font-size: 35px;
      }
`

const SlideParagraph = styled.p`
      text-align: center;
      font-size: 15px;
      @media(min-width: 768px){
      font-size: 20px;
      }
      `


const Slider = () => {

      const [slideIndex, setSlideIndex] = useState(0)

      const moveSlide = (direction) => {

            //index starts from0
           const totalNumOfSlides = Sliderdatas.length - 1

           if (direction === 'left') {
                setSlideIndex(slideIndex > 0 ? slideIndex - 1: totalNumOfSlides)
                return
           }

           if(direction === 'right'){
               setSlideIndex(slideIndex < totalNumOfSlides ? slideIndex + 1 : 0)
           }

      }
  return (
    <Container>
      <SlideChangeBtn direction="left" onClick={() => moveSlide('left')}>
            <KeyboardArrowLeftOutlinedIcon/>
      </SlideChangeBtn>

        <Wrapper>
         <SliderContainer slideIndex={slideIndex}>

          {
            Sliderdatas.map(data => (
          <Slide key={data.id}>
            <Image src={data.img} alt="slide-image"/>
            <SlideContent>
                 <SlideHeading>{data.heading}</SlideHeading>
                 <SlideParagraph>{data.paragraph}</SlideParagraph>
            </SlideContent>
          </Slide>
            ))
          }
         </SliderContainer>
        </Wrapper>

        <SlideChangeBtn direction="right" onClick={() => moveSlide('right')}>
          <ChevronRightOutlinedIcon/>
          </SlideChangeBtn>

    </Container>
  )
}

export default Slider