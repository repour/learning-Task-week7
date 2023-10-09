import { FlexCon, P500, ProButton, TitleH2 } from '../../css-components/css-components'
import styled from 'styled-components'

const Div = styled(FlexCon)`
  padding: 3rem 4rem;
  margin: 2rem 4rem;
  border-radius: 15px;
  background-color: #000;
  height: 18rem;
`
const H = styled(TitleH2)`
  color: white;
  font-size: 2rem;
`
const P = styled(P500)`
  color: white;
  margin: 1rem 0;
  
`
const Img = styled.img`
  width: 42%;
`
const InputDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: white;
`
const InputA = styled.input`
  background-color: white;
  border: none;
  padding: 1rem 0;
  width: 12rem;
  &::placeholder{
    color: #B6B6B6;
    font-weight: 500;
    padding: 1rem;
  }
`
const Button = styled(ProButton)`
  border-radius: 15px;
  margin: 0;
`

const Subscribe = () => {
  return (
    <Div>
      <Img src="./Subscribe/burger.png" alt="" />
      <div style={{width: '40%'}}>
        <H>Subcribe To Our Newsletter</H>
        <P>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</P>
        <InputDiv>
        <InputA type="text" placeholder='Type your email.....'/>
        <Button>SUBCRIBE</Button>
        </InputDiv>
      </div>
    </Div>
  )
}

export default Subscribe