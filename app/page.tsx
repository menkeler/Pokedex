"use client"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddPokemon from "./components/AddPokemon"
import PokemonCard from "./components/PokemonCard";
import style from "./Home.module.css"




export default function Home() {
  
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    const storedPokemons = localStorage.getItem('pokemons');
    if (storedPokemons) {
      setPokemons(JSON.parse(storedPokemons));
    } else {
      fetchPokemons();
    }
    
  },[])

  const fetchPokemons = async () => {
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemons = response.data.results;
      sessionStorage.setItem('pokemons', JSON.stringify(pokemons));
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    }
  };

  const individualPokemons = async (name) => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemons = response.data;
      console.log(pokemons);
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    }
  };




  return (
  <>
    <div className = {style.top} >
      <Header />
      <SearchBar />
      <AddPokemon />
    </div>
    <div className ={style.bottom}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key = {index} Pokemon = {pokemon} fetching = {individualPokemons(pokemon.name)} />
      ))}
      
    </div>
  </>
  );
}
