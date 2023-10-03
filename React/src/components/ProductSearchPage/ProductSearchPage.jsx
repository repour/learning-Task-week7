import React from 'react'
import PropTypes from 'prop-types'
import Head from '../Head/Head'
import SiteInfo from '../SiteInfo/SiteInfo'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'
import FilterProduct from '../FilterProduct/FilterProduct'

const ProductSearchPage = props => {
  return (
    <div>
      <Head />
      <FilterProduct />
      <SiteInfo />
      <Subscribe />
      <Footer />

    </div>
  )
}

ProductSearchPage.propTypes = {}

export default ProductSearchPage