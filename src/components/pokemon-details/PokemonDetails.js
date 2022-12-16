import { useState, useEffect  } from 'react'
import Spinner from '../spinner/Spinner'

import {getSinglePokemon} from '../../fetch/fetchPokemon'

import './pokemon-details.scss'

const PokemonDetails = ({pokemonSelected}) => {

    const [pokemonDetails, setPokemonDetails] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPokemonDetails()
      }, [pokemonSelected]
    )

    const getPokemonDetails = () => {
        let id = pokemonSelected
        if (!id) {
            return
        }
        setLoading(true)
        getSinglePokemon(id)
            .then(res => {
                setLoading(false)
                setPokemonDetails(res)
            }).catch()
    }

    const skeleton = pokemonDetails || loading ? null : <div>skeleton</div>
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || !pokemonDetails) ? <View  pokemonDetails={pokemonDetails} /> : null
    
    return (
        <>
            {skeleton}
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