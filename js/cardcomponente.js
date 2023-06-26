import { colors } from './colors.js';
export default function cardComponente(data) {
  const { stats } = data
  const [, attack, defense] = stats
  const { types } = data
  const typeClass = types.map(item => item.type.name)[0]
  const arrtype = types.map((item) => {
    return `<li style="background-color:${colors[item.type.name]};">${item.type.name}</li>`  
  }).join('')
    console.log(attack);
    console.log(defense.base_stat);
    return `
    <section class="item-pokemon ${typeClass}" data-card="${data.name}">
  <div class="info-pokemon" data-card="${data.name}">
    <h1 data-card="${data.name}">${data.name}</h1>
    <div data-card="${data.name}" class="stats-list">
      <span class="statsNumber">${attack.base_stat}</span>
      <span class="statsNumber">${defense.base_stat}</span>
      <span class="statsName">attack</span>
      <span class="statsName">defense</span>
    </div>
    <div>
      <ul class="types">
        ${arrtype}
      </ul>
    </div>
  </div>
  <figure data-card="${data.name}" class="img-pokemon">
    <img data-card="${data.name}" src="${data.sprites.other.home.front_default}"
    />
  </figure>
</section>
    `
   
}

