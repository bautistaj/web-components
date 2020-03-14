import './component/card.js';
const API = 'https://rickandmortyapi.com/api/character/';

window.addEventListener('load', () => {
  getCharacters();
});

async function getCharacters() {
  const res = await fetch(API);
  const json = await res.json();
  const main = document.querySelector('main');

  json.results.forEach(character => {
    const el = document.createElement('btaj-card');
    el.character = character;
    main.appendChild(el);
  });
}