'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import style from "./Home.module.css";
import PokemonDetails from '@/app/components/PokemonDetails';

const DetailsPage = () => {
  const ID = window.location.pathname.split('/').at(-1);
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonData = () => {
    const storedData = sessionStorage.getItem('pokemons');
    const pokemons = storedData ? JSON.parse(storedData) : null;
    const data = pokemons && ID ? pokemons.find(pokemon => pokemon.name === ID) : null;
    setPokemonData(data);
    setIsLoading(false); 
  };

  useEffect(() => {
    fetchPokemonData();
  }, [ID]);

  return (
    <>  
      <div className={style.top}>
        <Header/>
        <div className={style.pokemonCard}>
        {!isLoading && pokemonData ? (
          <PokemonDetails Pokemon={pokemonData} />
        ) : (
          <div>
            <h1>Undiscovered Pokemon</h1>
          </div>
        )}

        </div>   
      </div>
    </> 
  );
}

export default DetailsPage;
