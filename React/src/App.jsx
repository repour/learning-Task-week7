import { createContext, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import ProductSearchPage from './components/ProductSearchPage/ProductSearchPage'
import { BrowserRouter as Switch, Link, Route } from 'react-router-dom';
import products from './products'

export const AppData = createContext(null)
function App() {

  const [data, setData] = useState([...products])
  const [filterredData, setFilterredData] = useState([...products])
  
  const handleSearch = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();

    const result = products.filter((product) => {
      return product.productName.toLowerCase().includes(searchTerm)
    })

    setFilterredData(result)
  }

  return (
    <>
      <AppData.Provider value={{
        productList: data,
        filterredProductList: filterredData,
        handleSearch:handleSearch
      }}>

      <Switch>
        <Route path ="/" exact>
          <Home />
        </Route>
        <Route path= "/search" exact>
          <ProductSearchPage onSearch={handleSearch} productList={filterredData} />
        </Route>
      </Switch>
      </AppData.Provider>
    </>
  )
}

export default App
