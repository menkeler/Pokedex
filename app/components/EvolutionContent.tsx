import React from 'react';
import Link from 'next/link'; 
const EvolutionContent = ({ pokemon }) => {
    console.log(pokemon);

    return (
        <div>
            <h2>Evolution 1</h2>
            <Link href={`/Details/${pokemon.species.name}`} passHref>
            <button>{pokemon.species.name && pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</button>

            </Link>

            {pokemon.evolves_to && pokemon.evolves_to.length > 0 && (
                <div>
                    <h2>Evolution 2</h2>
                    <Link href={`/Details/${pokemon.evolves_to[0]?.species.name}`} passHref>
                    <button>{pokemon.evolves_to[0]?.species.name && pokemon.evolves_to[0].species.name.charAt(0).toUpperCase() + pokemon.evolves_to[0].species.name.slice(1)}</button>

                    </Link>
                    {pokemon.evolves_to[0]?.evolves_to && pokemon.evolves_to[0].evolves_to.length > 0 && (
                        <div>
                            <h2>Evolution 3</h2>
                            <Link href={`/Details/${pokemon.evolves_to[0].evolves_to[0]?.species.name}`} passHref>
                            <button>{pokemon.evolves_to[0].evolves_to[0]?.species.name && pokemon.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + pokemon.evolves_to[0].evolves_to[0].species.name.slice(1)}</button>

                            </Link>
                        
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EvolutionContent;
