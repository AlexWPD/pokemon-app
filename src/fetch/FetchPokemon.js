

const getData = async (url) => {
    let res = await fetch(url)
    if (!res.ok) {
        throw new Error (`Не получилось fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
}

export const getAllPokemons = () => {
    return getData('https://pokeapi.co/api/v2/pokemon/')
}

export const getSinglePokemon = async (id) => {
    const res = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return transformPokemonData(res)
}

const transformPokemonData = (pokemonData) => {
    return {
        name: pokemonData.name,
        image: pokemonData.sprites.other.dream_world.front_default
    }
}
