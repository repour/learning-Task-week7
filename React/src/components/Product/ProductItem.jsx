import PropTypes from 'prop-types'
import styled from 'styled-components'
import { P500, ProButton } from '../../css-components/css-components'

const Div = styled.div`
    box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.10);
    border-radius: 30px;
    overflow: hidden;
    padding-bottom: 2rem;
    max-width: 400px;
`
const Img = styled.img`
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
`
const ItemDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`
const P = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`
const Span = styled.span`
    font-size: 0.75rem;
`
const ItemBut = styled(ProButton)`
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    margin: 0;
`

const ProductItem = props => {
    return (
        <Div>
            <Img src={props.productPhoto} alt={props.productName} />
            <ItemDiv>
                <P>{props.productName}</P>
                <div>
                    <img src="./Products/star.svg" alt="" />
                    <Span> {props.productRate}</Span>
                </div>
            </ItemDiv>
            <ItemDiv>
                <ItemBut>Add To Cart</ItemBut>
                <P500>{props.productPrice}</P500>
            </ItemDiv>



        </Div>
    )
}

ProductItem.propTypes = {
    productID: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productPhoto: PropTypes.string.isRequired,
    productRate: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
}

export default ProductItem