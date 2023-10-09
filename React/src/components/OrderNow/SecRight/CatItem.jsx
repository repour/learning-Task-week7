import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P500 } from '../../../css-components/css-components'


const Div = styled.div`
    margin: auto;
    padding: 0 1.5rem;
    background: white;
    background-size: 100% 70% ;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: calc(20vw - 4rem);
    height: 15rem;
`
const Img = styled.img`
    display: block;
    margin: auto;
    width: 115%;
    max-width: 210px;
    position: relative;
    top: -4rem;
    left: -0.75rem;
`
const PosDiv = styled.div`
    position: relative;
    top: -3rem;
`
const ArrowImg = styled.img`
    width: 20%;
    max-width: 38px;

`
const ArrowDiv = styled.div`
    display:flex ;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    position: relative;
    top: 1.25rem;
`

const CatItem = props => {
  return (
    <Div>
        <Img src={props.categoryPhoto} alt={props.categoryName} />
        <PosDiv>
        <h4 style={{textAlign: 'center' , fontSize: '1.25rem' , marginBottom: '0.5rem'}}>{props.categoryName}</h4>
        <P500 style={{textAlign: 'center'}}>{props.categoryDesc}</P500>
        <P500 style={{textAlign: 'center'}}><span style={{color: '#EE140A'}}>$</span>{props.categoryPrice}</P500>
        <ArrowDiv>
            <ArrowImg src="./Order/black.svg" alt="" />
            <ArrowImg src="./Order/white.svg" alt="" />
        </ArrowDiv>

        </PosDiv>
    </Div>
  )
}

CatItem.propTypes = {
    categoryID:PropTypes.number.isRequired,
    categoryName:PropTypes.string.isRequired,
    categoryPhoto:PropTypes.string.isRequired,
    categoryDesc:PropTypes.string.isRequired,
    categoryPrice:PropTypes.string.isRequired,
}

export default CatItem