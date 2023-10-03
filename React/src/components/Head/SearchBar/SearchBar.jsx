import React from 'react'
import "./SearchBar.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const SearchBar = () => {
  return (
    <Link to="/search" style={{ textDecoration: 'none' }}>
    <div className='search-sec'>
        <input type="text" className='search-box' placeholder='Search'/>
        <button><img src="./Head/Group.svg" alt="" /></button>
    </div>
    </Link>
  )
}

export default SearchBar