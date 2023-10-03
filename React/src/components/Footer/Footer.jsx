import React from 'react'
import { FlexCon, P500, ProButton } from '../../css-components/css-components'
import styled from 'styled-components'

const Div = styled(FlexCon)`
  margin-top: 6rem;
  padding-top: 4rem;
  background-color: #FAFAFF;
  justify-content: space-between;
  gap: 6rem;
  align-items: start;
`
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;
`
const Img = styled.img`
  padding: 1rem;
  width: 100%;
  border-radius: 100%;
  background-color: #F5DDC4;
`
const P = styled(P500)`
  color: #B6B6B6;
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
`
const P1 = styled(P)`
  margin: 1rem 0 2rem;
`
const LogoImg = styled.div`
  background-image:url('./Footer/facebook.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 65%;
  background-color: #F5DDC4;
  padding: 1.5rem;
  width: 35px;
  height: 35px;
  border-radius: 100%;
`
const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8.4rem;
  position: relative;
  top: 3rem;
`
const InputDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 45px;
  background-color: white;
  margin-top: 2rem;
`
const Input = styled.input`
  background-color: white;
  border: none;
  width: 12rem;
  &::placeholder{
    color: #B6B6B6;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 1rem;
  }
`
const Button = styled(ProButton)`
  border-radius: 15px;
  margin: 0;
  background: white;
  padding: 0;
`
const ButImg = styled.img`
  background-color: #F48E28;
  width: 125%;
  border-radius: 100%;
  padding: 0.5rem 0.75rem;
`


const Footer = () => {
  return (
    <Div className='divSec'>
      <div>
        <img src="./Footer/logo.png" alt="logo" style={{ marginBottom: '2rem' }} />
        <P1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</P1>
        <LogoDiv>
          <LogoImg></LogoImg>
          <LogoImg style={{ backgroundImage: "url('./Footer/twitter.svg')" }}></LogoImg>
          <LogoImg style={{ backgroundImage: "url('./Footer/linkedin.svg')" }}></LogoImg>
          <LogoImg style={{ backgroundImage: "url('./Footer/instagram.svg')" }}></LogoImg>
        </LogoDiv>
      </div>
      <div>
        <H2>Opening Restaurant</H2>
        <P>Sat-Wet: 09:00am-10:00PM</P>
        <P>Thursdayt: 09:00am-11:00PM</P>
        <P>Friday: 09:00am-8:00PM</P>
      </div>
      <div>
        <H2>About Us</H2>
        <P>Contact Us</P>
        <P>Order Delivery</P>
        <P>Payment & Tex</P>
        <P>Terms of Services</P>
      </div>
      <div>
        <H2>Contact Us</H2>
        <P>1234 Country Club Ave</P>
        <P>NC 123456, London, UK</P>
        <P>+0123 456 7891</P>
        <InputDiv>
          <Input type="text" placeholder='Enter your email....' />
          <Button><ButImg src="./Footer/Vector.svg" alt="arrow" /></Button>
        </InputDiv>
      </div>
    </Div>
  )
}

export default Footer