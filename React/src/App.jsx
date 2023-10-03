import { createContext, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import ProductSearchPage from './components/ProductSearchPage/ProductSearchPage'
import { BrowserRouter as Switch, Link, Route } from 'react-router-dom';
import products from './products'

export const AppData = createContext(null)
function App() {

  const [data, setData] = useState([...products])
  const [filterredData, setFilterredData] = useState([])
  


  return (
    <>
      <AppData.Provider value={{
        productList: data,
        filterredProductList: filterredData,

      }}>

      <Switch>
        <Route path ="/" exact>
          <Home />
        </Route>
        <Route path= "/search" exact>
          <ProductSearchPage />
        </Route>
      </Switch>
      </AppData.Provider>
    </>
  )
}

export default App
