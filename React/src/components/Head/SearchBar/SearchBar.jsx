import React, { useContext, useState } from 'react'
import "./SearchBar.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AppData } from '../../../App'

const SearchBar = () => {
  const {handleSearch: onSearch} = useContext(AppData)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTerm = (evt) => {
      setSearchTerm(evt.target.value);
      onSearch(evt.target.value)
  }

  return (
    <Link to="/search" style={{ textDecoration: 'none' }}>
    <div className='search-sec'>
        <input value={searchTerm} type="text" className='search-box' placeholder='Search' onChange={handleSearchTerm}/>
        <button><img src="./Head/Group.svg" alt="" /></button>
    </div>
    </Link>
  )
}

export default SearchBar