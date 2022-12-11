

const FetchPokemon = () => {

    const getData = async (url) => {
        let res = await fetch(url)
        if (!res.ok) {
            throw new Error (`Не получилось fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    const getAllPokemons = () => {
        return getData('https://pokeapi.co/api/v2/pokemon/')
    }

    const getSinglePokemon = (id) => {
        return getData(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }

    return {getAllPokemons, getSinglePokemon}
}

export default FetchPokemon
