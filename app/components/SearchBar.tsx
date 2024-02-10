import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({ value, onChange, onAddPokemon }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleAddPokemon = () => {
    onAddPokemon();
  };

  return (
    <>
      <div className={style.searchbar}>
        <input
          type="search"
          placeholder="Search Pokemon"
          value={value}
          onChange={handleChange}
        />        
      </div>
      <div className={style.addButton}>
        {/* Add Pokemon button */}
        <button onClick={handleAddPokemon}>Add Pokemon</button>
      </div>
    </>
  );
};

export default SearchBar;
