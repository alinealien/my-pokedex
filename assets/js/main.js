/*Aqui pegou o link da API da pokedex, com limite de 10 pokemons*/

/* Aqui foi a definição da paginação 0 de 10 */ 

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}" >
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

/*fetch(url)
     .then((response) => response.json())
     .then((jsonBory) => jsonBory.results)
     .then((pokemons) => { */
     
    pokeapi.getPokemons().then((pokemons = []) => { 
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

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