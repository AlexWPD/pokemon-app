import { useState, useEffect  } from 'react'
import FetchPokemon from '../../fetch/FetchPokemon'
import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import img from "../../pictures/no-image.webp"

import './random-pokemon.scss'


const RandomPokemon = () => {

    const {getSinglePokemon} = FetchPokemon()

    const [image, setImage] = useState(null)
    const [name, setName] = useState(null)
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
        .then(res => {
            setImage(res.sprites.other.dream_world.front_default)
            setName(res.name)
            setLoading(false)
        })
        .catch(onError)
    }

    const error = errorMessage ? <Error/> : null
    const spinner = loading ? <Spinner/> : null
    const content = !(loading || errorMessage) ? <Pokemon name={name} image={image}/> : null

    return (
        <div className='random'>
            {error}
            {spinner}
            {content}
            <div className='random-action'>
                <h3>Random Pokemon for today!</h3>
                <p>Do you want to get to know him better?</p>
                <p>Or choose onother one!</p>
                <button className='btn' onClick={() => updatePokemon(Math.floor(Math.random() * 1100))} >Try it</button>
            </div>
        </div>
    )
}

const Pokemon = ({name, image}) => {
    return (
        <div className='random-pokemon'>
            <div className='random-image'>
                <img src={image ? image : img} alt='pokemon'></img>
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