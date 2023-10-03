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
const ShadowDiv = styled(InfoDiv)`
  padding: 4rem 0;
  margin: 0 auto;
  text-align: center;
`
const Div = styled.div`
  box-shadow: 0px 20px 80px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const H2 = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
`
const Img = styled.img`
  width: 50%;
`
const LeftImg = styled.img`
  position: relative;
  border-radius: 100%;
  left: -1.25rem;
  width: 8%;
`
const RightImg = styled.img`
  position: relative;
  right: -1.25rem;
  border-radius: 100%;
  width: 8%;
`
const AccDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`
const AccImg = styled.div`
  background-image:url('./Testimonial/account.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 76px;
  height: 76px;
  border-radius: 100%;
`

const Testimonials = () => {
  return (
    <Con>
      <OrangeP>Testimonials</OrangeP>
      <TitleH2>Our Happy Client Says</TitleH2>
      <Wrapper>
        <Div>
          <LeftImg src="./Testimonial/leftArr.png" alt="leftArrow" />
          <ShadowDiv>
            <AccDiv>
              <AccImg></AccImg>
              <div style={{textAlign: 'left'}}>
              <P500 style={{fontWeight: 600}}>Willians Jhone </P500>
              <p style={{fontWeight:'400' , fontSize: '0.75rem'}}>CEO & Co-Founder</p>
              </div>
            </AccDiv>
            <P500>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”
            </P500>
          </ShadowDiv>
          <RightImg src="./Testimonial/rightArr.png" alt="rightArrow" />

        </Div>
        <Img src="./Testimonial/01.png" alt="" />
      </Wrapper>
    </Con>
  )
}

export default Testimonials