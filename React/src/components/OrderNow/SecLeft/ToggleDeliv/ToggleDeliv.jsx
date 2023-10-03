import "./ToggleDeliv.css"
import React from 'react'

const ToggleDeliv = () => {
  return (
    <>
        <label className="switch">
        <input type="checkbox" />
        <span className="slider round">Bike Delivery</span>
        </label>
    </>
  )
}

export default ToggleDeliv