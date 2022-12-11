import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FetchPokemon from './fetch/FetchPokemon';

import './index.scss';

// const fetchPokemon = new FetchPokemon();

// fetchPokemon.getAllPokemons().then(res => {
//   res.results.forEach(element => {
//     console.log(element.name);
//   });
// });


// fetchPokemon.getSinglePokemon(45).then(res => console.log(res.name));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
