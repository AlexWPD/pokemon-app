import { useState, useEffect  } from 'react'
import Spinner from '../spinner/Spinner'

import {getSinglePokemon} from '../../fetch/fetchPokemon'

import './pokemon-details.scss'

const PokemonDetails = ({pokemonSelected}) => {

    const [pokemonDetails, setPokemonDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        console.log(`id = ${pokemonSelected}`)
        setLoading(true)
        getPokemonDetails()
      }, [pokemonSelected]
    )

    const getPokemonDetails = () => {
        let id = pokemonSelected
        getSinglePokemon(id)
            .then(res => {
                console.log(res)
                setPokemonDetails(res)
                setLoading(false)
                setError(false)
            }).catch()
    }

    const errorMessage = error ? <Spinner/> : null
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || error) ? <View  pokemonDetails={pokemonDetails} /> : null
    
    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default PokemonDetails

const View = ({pokemonDetails}) => {

    const {name, image} = pokemonDetails

    return (
        <div className='pokermon-details-wrapper'>
            <h3 className='pokermon-details-title'>{name}</h3>
            <div className='pokermon-details-img'>
            <img src={image} alt='pokemon'></img>
            </div>
        </div>
    )
}