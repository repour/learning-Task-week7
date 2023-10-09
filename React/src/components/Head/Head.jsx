import { FlexCon, HeadList, HeadItem } from '../../css-components/css-components'
import SearchBar from './SearchBar/SearchBar.jsx'
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Head = () => {

  return (
    <FlexCon>
      <Link to="/" >
        <img src="./Head/logo.png" alt="" />
      </Link>
      <HeadList>
        <HeadItem >
          <StyledLink to="/" >Home</StyledLink>
        </HeadItem>
        <HeadItem>Menu</HeadItem>
        <HeadItem>Service</HeadItem>
        <HeadItem>Shop</HeadItem>
      </HeadList>
      <SearchBar />

    </FlexCon>
  )
}

export default Head