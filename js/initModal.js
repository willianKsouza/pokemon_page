import renderModal from "./render.js";

export default function initModal(data) {
  //data é um array com objetos
  
  const htmlReference = {
    elem: (element) => document.querySelector(element),
    elements: (element) => document.querySelectorAll(element),
  };

  htmlReference
    .elem('[data-container="js"]')
    .addEventListener("click", (event) => {

      const pokename = event.target.dataset.card;
      const urlPokemon = data.find((element) => {
        return element.name === pokename;
      });


     
      renderModal(urlPokemon);
      htmlReference.elem('[data-modal="container"]').classList.toggle("active");

      
     htmlReference.elem('[data-close="close"]').addEventListener("click", () => {
        htmlReference.elem('[data-modal="container"]').classList.toggle("active");
});

    });

 
}

// htmlReference.elem('[data-close="close"]').addEventListener("click", (ev) => {
// htmlReference.elem('[data-modal="container"]').classList.toggle("active");
// });
