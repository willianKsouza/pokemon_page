import cardComponente from './cardcomponente.js';
import * as test from './paginacao.js';
export default function inputSearch(itens) {
    const input = document.querySelector('[data-searchInput="js"]')
    const container = document.querySelector('[data-container="js"]')
    const searchPokemon = (event) => {
    const inputValue = event.target.value
      if(event.keyCode != 8){
        const result = itens.filter(e => e.name.includes(inputValue))
       
        container.innerHTML = ''
        return result.forEach(elem => container.insertAdjacentHTML('beforeend', cardComponente(elem)))
      }else if(inputValue == ''){
        container.innerHTML = ''
        for (let i = 0; i < test.perPage; i++) {
          container.insertAdjacentHTML('beforeend', cardComponente(itens[i]))
          
        }
      }
    }

    const debau = function debounce(func, timeout = 1000){
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        
      };
    }
    
    const newDebau = debau(searchPokemon)
   
    input.addEventListener('keyup', newDebau)
}



