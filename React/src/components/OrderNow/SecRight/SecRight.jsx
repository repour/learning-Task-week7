import React from 'react'
import styled from 'styled-components'
import category from './categ'
import CatItem from './CatItem'

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-row-gap: 5rem;
  padding: 6rem 1.5rem 2rem;
  width: 40vw;
  background: linear-gradient(200deg, #D9D9D9 -18.39%, rgba(217, 217, 217, 0.00) 89.51%);
  background-size: 80%;
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 10px;

`

const SecRight = () => {
  return (
    <Div>
      {
        category.map((cat) =>{
          return (
          <CatItem
            key={cat.categoryID}
            categoryID={cat.categoryID}
            categoryName={cat.categoryName}
            categoryPhoto={cat.categoryPhoto}
            categoryDesc={cat.categoryDesc}
            categoryPrice={cat.categoryPrice}
          />)
        })

      }
      
    </Div>
  )
}

export default SecRight