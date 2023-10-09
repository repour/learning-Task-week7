import Head from '../Head/Head'
import OrderNow from '../OrderNow/OrderNow'
import Product from '../Product/Product'
import SiteInfo from '../SiteInfo/SiteInfo'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <Head />
    <OrderNow />
    <SiteInfo />
    <Product />
    <Services />
    <Testimonials />
    <Subscribe />
    <Footer />
    </>
  )
}


export default Home