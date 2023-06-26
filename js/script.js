import pagination from './paginacao.js';
import initModal from './initModal.js';
import searchInput from './search.js';

  
async function getPokemonApi() {
    const urlPokemon = item => `https://pokeapi.co/api/v2/pokemon/${item}`
    const pokemonsLimit = 150
    const listPokemons = []
    for (let i = 1; i <= pokemonsLimit; i++){
        listPokemons.push(await fetch(urlPokemon(i)).then(response => response.json()))
    }
   
   Promise.all(listPokemons)
    .then(itens => {
        pagination(itens);
        initModal(itens);
        searchInput(itens);
    })
    
}


getPokemonApi();