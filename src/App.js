import Header from './components/header/Header'
import RandomPokemon from './components/random-pokemon/RandomPokemon'
import PokemonList from './components/pokemon-list/PokemonList'
import PokemonDetails from './components/pokemon-details/PokemonDetails'

import './app.scss';
import { useState } from 'react';


const App = () => {

  const [pokemonSelected, setPokemonSelected] = useState('')

  const onSelectPokemon = (id) => {
    let trueId = id + 1
    console.log(trueId);
    setPokemonSelected(trueId)
  }

  return (
    <div className="app">
      <div className='wrapper'>
        <Header/>
        <RandomPokemon/>
        <div className='content-wrapper'>
          <PokemonList onSelectPokemon={onSelectPokemon} />
          <PokemonDetails pokemonSelected={pokemonSelected} />
        </div>
      </div>
    </div>
  )
}

export default App;
