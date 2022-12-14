import React from 'react'
import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import { useState, useEffect  } from 'react'
import {getAllPokemons} from '../../fetch/fetchPokemon'

import './pokemon-list.scss'

const PokemonList = ({onSelectPokemon}) => {

  const [pokemonList, setPokemonList] = useState([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    console.log('useEffect');
      updatePokemonList(offset)
    }, []
  )
  

  const updatePokemonList = (offset) => {
    setErrorMessage(false)
    getAllPokemons(offset)
      .then(res => {
        setPokemonList(pokemonList => [...pokemonList, ...res.results])
        setOffset(offset => offset + 6)
        setLoading(false)
      })
      .catch(onError)
  }


  const onError = () => {
    setLoading(false)
    setErrorMessage(true)
}

  const pokemonItem = pokemonList.map((item, i) => {
    return <li className='pokemon-item' 
               key={i}
               onClick={() => onSelectPokemon(i)} >{item.name}</li>
  })
 
  const spinner = loading ? <Spinner/> : null
  const error = errorMessage ? <Error/> : null
  const content = !(loading || errorMessage) ? pokemonItem : null

  return (
    <div className='pokemon-list-wrapper'>
      <ul className='pokemon-list'>
          {spinner}
          {error}
          {content}
      </ul>
      <button className='btn'
              onClick={() => updatePokemonList(offset)} >Show more</button>
    </div>
  )
}

export default PokemonList
