/*Aqui pegou o link da API da pokedex, com limite de 10 pokemons*/

/* Aqui foi a definição da paginação 0 de 10 */ 

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* CONSUMO DE UMA REQUISIÇÃO COM O FETCH - ASSINCRONO - RETORNO DE UMA PROMISES - */
fetch(url)
     .then(function (response) {
         console.log(response)
})
     .catch(function (error) {
        console.error(error)
})
     .finaly(function () {
      console.log('Requisição concluída!')
})

const x = 50 + 10
console.log(x)