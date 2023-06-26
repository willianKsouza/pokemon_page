import { colors } from "./colors.js";

const strategis = {
  attack: (acc, elem, item) => {
    acc.push(`<div class="status-item">
    <span>${elem.base_stat}</span>
    <h2>${item}</h2>
    </div>`);
  },
  defense: (acc, elem, item) => {
    acc.push(`<div class="status-item">
    <span>${elem.base_stat}</span>
    <h2>${item}</h2>
    </div>`);
  },
  "special-attack": (acc, elem, item) => {
    acc.push(`<div class="status-item">
    <span>${elem.base_stat}</span>
    <h2>Sp Attack</h2>
    </div>`);
  },
  "special-defense": (acc, elem, item) => {
    acc.push(`<div class="status-item">
    <span>${elem.base_stat}</span>
    <h2>Sp Defense</h2>
    </div>`);
  },
};

export default function renderModal(data) {
  const { stats: pokemonInfos, abilities, types } = data;
  const [ability] = abilities
    .slice(0, 1)
    .map((e) => `<p>${e.ability.name}</p>`);
  const arrtype = types
    .map((item) => {
      return `<li style="background-color:${colors[item.type.name]};">${
        item.type.name
      }</li>`;
    })
    .join("");

  const numberStats = [pokemonInfos[0].base_stat, data.base_experience];
  const calcStats = (stats) => {
    return `<ul class="status-helth">
      <li>Healthy Points</li>
      <li>${stats[0]}</li>
      <span style="max-width:${
        (stats[0] / 100) * 100
      }px;" class="barra-vida"></span>
      </ul>
      
      <ul class="status-experience">
      <li>Experience</li>
      <li>${stats[1]}</li>
      <span style="max-width:${
        (stats[1] / 220) * 100
      }px;" class="barra-experience"></span>
      </ul>`;
  };

  const filterList = pokemonInfos
    .reduce((htmlResultArray, pokemonInfo) => {
      const statName = pokemonInfo.stat.name;
      strategis[statName]?.(htmlResultArray, pokemonInfo, statName);
      return htmlResultArray;
    }, [])
    .join("");

  const content = `
   <section class="main-content2 ">
       <div class="modal-img-pokemon">
         <div class="modal-img">
           <img src="${data.sprites.other.dream_world.front_default}" />
         </div>
         <div class="types-pokemon">
          ${arrtype}
         </div>
       </div>
       <div class="modal-info">
       <div data-close="close" class="btn-close"><img  src="./img/letra-x.png" /></div>
         <div class="modal-titulo">
           <h1>${data.name}</h1>
           <p>Generation 1</p>
           <span>${data.id}</span>
         </div>
         <div class="modal-abilities">
           <p>Abilities</p>
           <p>${ability}</p>
         </div>
         <div class="modal-status">
         ${calcStats(numberStats)}
         </div>
         <div class="status-points">
          ${filterList}
         </div>
       </div>
     </section>
   `;

  document.querySelector('[data-modal="container"]').innerHTML = content;
}
