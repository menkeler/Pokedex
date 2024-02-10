import React from 'react';
import Link from 'next/link'; 
import style from './PokemonCard.module.css';

const PokemonCard = ({ Pokemon, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(Pokemon.name); 
  };

  return (
      <div className={style.pokemonCard}>
        <div className={style.deleteBtn}>
          <button onClick={handleDeleteClick}></button>
        </div>
        <div className={style.pokemonIcon}>
          <img src={Pokemon?.sprites?.front_default} alt={Pokemon?.name} />
        </div>
        <div className={style.pokemonName}>
        <h3>{Pokemon?.name && Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}</h3>

        </div>
        <div className={style.pokemonName}>
          <Link href={`/Details/${Pokemon.name}`} passHref>

          <button>Details</button>
          </Link>
        </div>
      </div>
    
  );
}

export default PokemonCard;
