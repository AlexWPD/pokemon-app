import Header from './components/header/Header'
import RandomPokemon from './components/random-pokemon/Random-pokemon'

import './app.scss';

function App() {
  return (
    <div className="app">
      <div className='wrapper'>
        <Header/>
        <RandomPokemon/>
      </div>
    </div>
  )
}

export default App;
