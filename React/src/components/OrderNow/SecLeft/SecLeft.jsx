import React from 'react'
import ToggleDeliv from './ToggleDeliv/ToggleDeliv'
import styled from 'styled-components'
import { FlexCon, H1, P500 } from '../../../css-components/css-components'

const Div = styled.div`
    width: 40vw;
    
`
const OrangeSpan = styled.span`
  color: #F48E28;
`
const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`
const Button = styled.button`
  width: 12rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(180deg, #EFAB68 0%, #F48E28 100%);
  border: none;
  color: white;
  border-radius: 10px;
`

const SecLeft = () => {
  return (
    <Div>
        <ToggleDeliv />
        <H1>
            The Fastest Delivery In <OrangeSpan>Your City</OrangeSpan>
        </H1>
        <P500>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. 
        </P500>
        <FlexCon style={{ padding: 0 ,justifyContent: 'left', marginTop: '4rem'}}>
          <Button>Order Now</Button>
          <img style={{width: '20%'}} src="./Order/PlayB.svg" alt="PlayB" />
          <Span>Order Process</Span>
        </FlexCon>
    </Div>
  )
}

export default SecLeft