import Header from './components/header/Header'
import RandomPokemon from './components/random-pokemon/RandomPokemon'
import PokemonList from './components/pokemon-list/PokemonList'

import './app.scss';


function App() {
  return (
    <div className="app">
      <div className='wrapper'>
        <Header/>
        <RandomPokemon/>
        <div className='content-wrapper'>
          <PokemonList/>
        </div>
      </div>
    </div>
  )
}

export default App;
