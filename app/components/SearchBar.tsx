import React from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <>
      <div className={style.searchbar}>
        <input type="search" placeholder="Search Pokemon"/>        
      </div>
    </>
  )
}

export default SearchBar