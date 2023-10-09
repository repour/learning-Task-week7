import { useContext } from 'react'
import { AppData } from '../../App';
import { Container, OrangeP, ProButImg, ProButton, TitleH2 } from '../../css-components/css-components';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Con = styled(Container)`
  margin: 4rem auto;
  text-align: center;
`
const ProCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 3rem 0;

`

const Product = () => {

  const { productList } = useContext(AppData)
  const products = productList.filter(pro => pro.productID < 7);
  console.log(products);
  return (
    <Con>
      <OrangeP>Product</OrangeP>
      <TitleH2>Most Popular Items</TitleH2>
      <ProCon className='ProCon'>
      {
        products.map((pro) => {
          return (
            
            <ProductItem
              key={pro.productID}
              productID={pro.productID}
              productName={pro.productName}
              productPhoto={pro.productPhoto}
              productRate={pro.productRate}
              productPrice={pro.productPrice}
            />
            )
        })
      }
      </ProCon>
      <Link to="/newProduct" style={{ textDecoration: 'none' }}>
        <ProButton>See More Product <ProButImg src="./Products/Vector.svg" alt="arrow" /></ProButton>
      </Link>
    </Con>

  )
}

export default Product