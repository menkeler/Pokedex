import React, { useState, useEffect } from 'react';
import style from './PokemonCard.module.css';
import StatsContent from './StatsContent';
import TypesContent from './TypesContent';
import FormsContent from './FormsContent';
import AbilitiesContent from './AbilitiesContent';
import EvolutionContent from './EvolutionContent';
import Link from 'next/link'; 
import './PokemonDetails.css'
const PokemonDetails = ({ Pokemon }) => {
  const [tabActive, setTabActive] = useState('stats');

  const tabs = ['forms', 'stats', 'types', 'ability', 'evolution'];

  function RenderContent() {
    switch (tabActive) {
      case 'types':
        return <TypesContent pokemon={Pokemon} />;
      case 'ability':
        return <AbilitiesContent pokemon={Pokemon} />;
      case 'forms':
        return <FormsContent pokemon={Pokemon} />;
      case 'evolution':
        return <EvolutionContent pokemon={Pokemon.evolution} />;
      default:
        return <StatsContent pokemon={Pokemon} />;
    }
  }

  return (
    <>    
      <Link href={`/`} passHref>
        <button>BACK</button>
      </Link>
      <div className={style.card}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>{Pokemon?.name && Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)}</h2>
        <img src={Pokemon?.sprites?.front_default} alt={Pokemon?.name} width='80%'/>
    </div>

      <div className="pokemon-basic">
        <h2>ID: <span>{Pokemon.id}</span></h2>
        <h2>Height: <span>{Pokemon.height}</span></h2>
        <h2>Weight: <span>{Pokemon.weight}</span></h2>
        <h2>BaseExp: <span>{Pokemon.base_experience}</span></h2>
      </div>

        <ul className="other-info"> 
          {tabs.map((tab, index) => {                    
            const name = tab.charAt(0).toUpperCase() + tab.slice(1);
            return (
              <li className={tab === tabActive ? 'active' : ''} key={index} onClick={() => setTabActive(tab)}>
           
                {name}
           
              </li>
            );
          })}                               
        </ul>
        <RenderContent />
      </div>
    </>
  );
}

export default PokemonDetails;
