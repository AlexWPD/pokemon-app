import './pokemon-details.scss'
import noImg from "../../pictures/no-image.webp"

const PokemonDetails = ({pokemonSelected}) => {

    
    
    return (
        <div className='pokermon-details-wrapper'>
            <h3 className='pokermon-details-title'>Pokemon Title</h3>
            <div className='pokermon-details-img'>
            <img src={noImg} alt='pokemon'></img>
            </div>
        </div>
    )
}

export default PokemonDetails