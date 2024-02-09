import React from 'react'
import style from './PokemonCard.module.css';



const PokemonCard = ({Pokemon, fetching}) => {
    fetching(Pokemon.name);

  return (
    <>
        <div className = {style.pokemonCard}>
            <div className = {style.deleteBtn}>
                <button></button>
            </div>
            <div className = {style.pokemonIcon}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"></img>
            </div>
            <div className = {style.pokemonName}>
                <h3>Charizard</h3>
            </div>

        </div>
    </>
  )
}

export default PokemonCard