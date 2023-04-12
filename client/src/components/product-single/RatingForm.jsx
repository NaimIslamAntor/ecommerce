import styled from "styled-components"

const Main = styled.div`
      padding: 20px 0;
      width: 100%;
`

const SelectInput = styled.select`
      width: 100%;
      height: 40px;

      @media(min-width: 768px;){
            width: 80%;
      }
`

const Option = styled.option``

const ButtonWrapper = styled.div`
      padding: 12px 0;
`

const RateButton = styled.button`
      background-color: red;
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      outline: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
`

const RatingForm = () => {
  return (
    <Main>
        <SelectInput>
            <Option value="1">1-Poor</Option>
            <Option value="2"> 2-Worse</Option>
            <Option value="3"> 2-Good</Option>
            <Option value="4"> 4-Excellent</Option>
            <Option value="5" selected> 5-Perfect</Option>
        </SelectInput>

        <ButtonWrapper>
        <RateButton>Submit</RateButton>
        </ButtonWrapper>
    </Main>
  )
}

export default RatingForm