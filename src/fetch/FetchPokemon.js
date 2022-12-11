

class FetchPokemon {

    getData = async (url) => {
        let res = await fetch(url)
        if (!res.ok) {
            throw new Error (`Не получилось fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllPokemons = () => {
        return this.getData('https://pokeapi.co/api/v2/pokemon/')
    }

    getSinglePokemon = (id) => {
        return this.getData(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }
}

export default FetchPokemon