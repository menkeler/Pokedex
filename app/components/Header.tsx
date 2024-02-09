import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className = {style.header}>
        <h1>POKEDEX</h1>
        <p>Discovering the world, one pokemon at a time</p>
      </div>
    </>
  )
}

export default Header;