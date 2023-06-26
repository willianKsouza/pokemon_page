import cardComponente from './cardcomponente.js';

export let perPage = 12;
export default function pagination(exportdata) {

     const htmlReference = {
        get(element){
            return document.querySelector(element);
        }
     }
    
    const state = {
        page:1,
        perPage,
        totalPage: Math.ceil(exportdata.length / perPage)
    }
    
    const controls = {
        next(){
            state.page++;
    
            const lastPage = state.page > state.totalPage;
            if (lastPage) {
                state.page--;
            }
            
        },
        prev(){
            state.page--;
            if (state.page < 1) {
                state.page++;
            }
        },
        goTo(page){
            if(page < 1){
               page = 1
            }
    
            state.page = page
            if (page > state.totalPage) {
                state.page = state.totalPage
            }       
        },
        createListener(){
            htmlReference.get('.first').addEventListener('click',() => {
                    controls.goTo(1);
                    htmlReference.get('.numbers').textContent = state.page;
                    update();
                })
    
            htmlReference.get('.last').addEventListener('click', () => {
                controls.goTo(state.totalPage)
                htmlReference.get('.numbers').textContent = state.page;
                update()
            })
    
            htmlReference.get('.next').addEventListener('click', () => {
                controls.next()
                htmlReference.get('.numbers').textContent = state.page;
                update()
            })
    
            htmlReference.get('.prev').addEventListener('click', () => {
                controls.prev()
                htmlReference.get('.numbers').textContent = state.page;
                update()
            })

            


            
        }
    }

    const list = {
        create(data){
          htmlReference.get('[data-container="js"]').insertAdjacentHTML('beforeend', cardComponente(data));

        },
        update(){
            htmlReference.get('[data-container="js"]').innerHTML = '';
            let page = state.page - 1;
            let start = page * state.perPage + 1;
            let end = start + state.perPage;
            const paginatedItems = exportdata.slice(start, end)
            
            paginatedItems.forEach(list.create)
        }
    }
    
    function update() {
        list.update()
    }
    
    function init() {
        list.update()
        controls.createListener()
    }
    
    init()
}