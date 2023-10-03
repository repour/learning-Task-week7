import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Head from '../Head/Head'
import SiteInfo from '../SiteInfo/SiteInfo'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import FilterProduct from '../FilterProduct/FilterProduct'
import { AppData } from '../../App'

const ProductSearchPage = props => {
  const {filterredProductList} = useContext(AppData)
  return (
    <div>
      <Head />
      <FilterProduct productItem={filterredProductList}  />
      <SiteInfo />
      <Subscribe />
      <Footer />

    </div>
  )
}

ProductSearchPage.propTypes = {}

export default ProductSearchPage