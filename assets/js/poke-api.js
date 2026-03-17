const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    pokemon.types = types
    pokemon.type = types[0]

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    // Campos necessários para o "About"
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.abilities = pokeDetail.abilities.map((slot) => slot.ability.name);

    return pokemon
}

// Busca detalhes para a lista principal (através da URL do Pokémon)
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

// Busca a lista de Pokémons
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
}

// BUSCA POR ID (Usado na página de detalhes)
pokeApi.getPokemonDetailById = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

// BUSCA DADOS DE ESPÉCIE (Usado para Breeding/Gênero)
pokeApi.getPokemonSpecies = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((response) => response.json())
}