import React from 'react'
import styled from 'styled-components'
import { Container, FlexCon, InfoDiv, OrangeP, P500, TitleH2 } from '../../css-components/css-components'

const Con = styled(Container)`
  margin: 4rem auto;
  text-align: center;
`
const Wrapper = styled(FlexCon)`
gap: 2rem;
justify-content: space-between;
margin: 2rem 0;
padding: 1rem 0;
`
const BorderDiv = styled(InfoDiv)`
  border: 1px solid #b6b6b657;
  border-radius: 10px;
  padding: 4rem 2rem;
`
const ShadowDiv = styled(InfoDiv)`
  box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 4rem 2rem;
`
const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
`
const Img = styled.img`
width: 35%;
`
const Services = () => {
  return (
    <Con>
      <OrangeP>Services</OrangeP>
      <TitleH2>Why Choose Our Favorite Food</TitleH2>
      <Wrapper>
        <BorderDiv>
          <Img src="./Services/01.svg" alt="01" />
          <H2>Qualityfull Food</H2>
          <P500>
          But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.
          </P500>
        </BorderDiv>
        <ShadowDiv>
          <Img src="./Services/02.svg" alt="02" />
          <H2>Healthy Food</H2>
          <P500>
          But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.
          </P500>
        </ShadowDiv>
        <BorderDiv>
          <Img src="./Services/03.svg" alt="03" />
          <H2>Fast Delivery</H2>
          <P500>
          But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.
          </P500>
        </BorderDiv>
      </Wrapper>
    </Con>
  )
}

export default Services