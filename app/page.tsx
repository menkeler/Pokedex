"use client"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddPokemon from "./components/AddPokemon";
import PokemonCard from "./components/PokemonCard";
import style from "./Home.module.css";

export default function Home() {


    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (value) => {
      setSearchValue(value);
    };
  
    const handleDelete = (pooke) => {
        const updatedPokemons = pokemons.filter(pokemon => pokemon.name !== pooke);
        sessionStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
        fetchAndSetPokemons()
        return updatedPokemons;
    };

    
    const fetchAndSetPokemons = () => {
        const storedPokemons = sessionStorage.getItem('pokemons');

        if (storedPokemons && JSON.parse(storedPokemons).length > 0) {
            setPokemons(JSON.parse(storedPokemons));
        } else {
            fetchPokemons();
        }

    };

    useEffect(() => {

        fetchAndSetPokemons();
    
    }, []);

    const fetchPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            const newPokemons = response.data.results;
            newPokemons.forEach(pokemon => {
                individualPokemons(pokemon.url.split('/').at(-2));
            });
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    };

    const individualPokemons = async (pokeName) => {
        try {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
            const { id, name, height, base_experience, weight, stats, types, abilities, sprites } = response.data;
            const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            const evolutionRes = await axios.get(speciesRes.data.evolution_chain.url);
            const evolution = evolutionRes.data.chain;
            const pokemonData = {
                id,
                name,
                height,
                base_experience,
                weight,
                stats,
                types,
                abilities,
                sprites,
                evolution
            };
            
            setPokemons(prevPokemons => {

                const isDuplicate = prevPokemons.some(pokemon => pokemon.id === pokemonData.id);
                
                if (isDuplicate) {
                    return prevPokemons; 

                } else {
                    const updatedPokemons = [...prevPokemons, pokemonData];
                    updatedPokemons.sort((a, b) => a.id - b.id);
                    sessionStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
                    return updatedPokemons;                    
                }
            });
            
        } catch (error) {
            // console.error('Error fetching Pokemon:', error);
            window.alert('Pokemon Not Found');
        }
    };
    
    
  

    return (
        <>
            <div className={style.top}>
                <Header />
                <SearchBar
                    value={searchValue}
                    onChange={handleSearchChange}
                    onAddPokemon={() => individualPokemons(searchValue)}
                />

            </div>
            <div className={style.bottom}>
           {pokemons.map((pokemon, index) => (
                     <PokemonCard key={index} Pokemon={pokemon} onDelete={() => handleDelete(pokemon.name)} />
            ))}
            </div>
        </>
    );
}


