/*Aqui pegou o link da API da pokedex, com limite de 10 pokemons*/

/* Aqui foi a definição da paginação 0 de 10 */ 

/*const offset = 0
const limit = 5
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` */

/* FOI RETIRADO DEVIDO A IMPLEMENTAÇÃO DO NOSSO MODELO DE API
function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}*/


function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

/*fetch(url)
     .then((response) => response.json())
     .then((jsonBory) => jsonBory.results)
     .then((pokemons) => { */
     
    pokeApi.getPokemons().then((pokemons = []) => { 
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml

    })
    
     

    /* const listItens = []

     for(let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
         pokemonList.innerHTML += convertPokemonToLi(pokemon) 
         listItens.push(convertPokemonToLi(pokemon))
     }   

     console.log(listItens)
     })
     
     .catch((error) => console.error(error))


// CONSUMO DE UMA REQUISIÇÃO COM O FETCH - ASSINCRONO - RETORNO DE UMA PROMISES -
 fetch(url)
      // DECLARAÇÃO DE FUNÇÃO COM ARROW FUNCTIONS - CALLBACKS *
     .then((response) => response.json()) // RETORNO DA PROMISE FETCH URL 
     .then((jsonBory) => console.log(jsonBory)) //RETORNO DO PRIMEIRO THEN 
     .catch((error) => console.error(error))


   // PRIMEIRA FORMA DE DECLARAR FUNÇÕES, SEM O AROW FUNCTIONS
    
   .then(function (response) {

     response
     .json()
     .then(function (responseBory) {
         console.log(response)
     })
})
     .catch(function (error) {
        console.error(error)
})
     .finally(function () {
      console.log('Requisição concluída!')
})  */

//const x = 50 + 10
//console.log(x)