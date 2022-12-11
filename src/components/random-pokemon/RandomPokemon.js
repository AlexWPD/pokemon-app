import { useState, useEffect  } from 'react'
import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import noImg from "../../pictures/no-image.webp"

import {getSinglePokemon} from '../../fetch/fetchPokemon'

import './random-pokemon.scss'

const RandomPokemon = () => {

    const [pokemon, setPokemon] = useState(null)

    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)

    useEffect(() => {
        console.log('effect')
        updatePokemon(1)
      }, []
    )

    const onError = () => {
        setLoading(false)
        setErrorMessage(true)
    }

    const updatePokemon = (id) => {
        setLoading(true)
        setErrorMessage(false)
        getSinglePokemon(id)
        .then(pokemonData => {
            setPokemon(pokemonData)
            setLoading(false)
        })
        .catch(onError)
    }

    const error = errorMessage ? <Error/> : null
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || errorMessage) ? <Pokemon pokemon={pokemon} /> : null

    return (
        <div className='random'>
            {error}
            {spinner}
            {content}
            <div className='random-action'>
                <h3>Random Pokemon for today!</h3>
                <p>Don't like?</p>
                <p>Choose onother one!</p>
                <button className='btn' onClick={() => updatePokemon(Math.floor(Math.random() * 1100))} >Try it</button>
            </div>
        </div>
    )
}

const Pokemon = ({pokemon}) => {

    const {name, image} = pokemon
    return (
        <div className='random-pokemon'>
            <div className='random-image'>
                <img src={image ? image : noImg} alt='pokemon'></img>
            </div>
            <div className='random-summary'>
                <h3 className='random-title'>{name}</h3>
                <p className='random-descr'>All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API. All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API.</p>
                <a href='#' className='btn'>Wiki</a>
            </div>
            </div>
    )
}

export default RandomPokemon