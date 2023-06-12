const pokeApi = {}

//CONVERSÃO PARA O NOSSO MODELO DA POKEAPI
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    //Conceito de destruction
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
         
}

pokeApi.getPokemons = (offset = 0 , limit = 5) => {
    /*const offset = 0
    const limit = 10*/
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
//Modelo da Pokeapi - Modelo complexo, pois retorna muita coisa no navegador.

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBory) => jsonBory.results)
    //.catch((error) => console.error(error))
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    

}

