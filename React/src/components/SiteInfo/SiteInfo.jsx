import React from 'react'
import { FlexCon, InfoDiv } from '../../css-components/css-components'
import styled from 'styled-components'

const Con = styled(FlexCon)`
  border-radius: 10px;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.05);
  justify-content: space-evenly;
  margin: 2rem 4rem;
  padding: 1rem 0;
`
const BorderDiv = styled.div`
  border-left: 1px solid #B6B6B6;
  height: 6rem;
`
const Img = styled.img`
  background-color: #F48E28;
  border-radius: 100%;
  padding: 0.5rem;
`
const P = styled.p`
  font-weight: 600;
`
const PLight = styled.p`
  font-size: 0.75rem;
`

const SiteInfo = () => {
  return (
    <Con>
      <InfoDiv>
        <Img src="./SiteInfo/time.svg" alt="time" />
        <P>Today 10:00am - 10:00pm</P>
        <PLight>Working time</PLight>
      </InfoDiv>
      <BorderDiv></BorderDiv>
      <InfoDiv>
        <Img src="./SiteInfo/loc.svg" alt="time" />
        <P>Washington, D.C., DC,USA</P>
        <PLight>Our Location</PLight>
      </InfoDiv>
      <BorderDiv></BorderDiv>
      <InfoDiv>
        <Img src="./SiteInfo/Phone.svg" alt="time" />
        <P>+0123 456 7891</P>
        <PLight>Phone Number</PLight>
      </InfoDiv>
    </Con>
  )
}

export default SiteInfo