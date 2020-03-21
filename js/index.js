import './component/card.js';
const API = 'https://rickandmortyapi.com/api/character';
let nextUrl;

window.addEventListener('load', () => {
  getCharacters(API);

  const container = document.getElementById('footer');
  const observer = new IntersectionObserver(handleIntersection,
    {rootMargin: "0px 0px 100% 0px"});
  observer.observe(container);
});


function handleIntersection() {
  if(nextUrl)
    getCharacters(nextUrl);
}

async function getCharacters(url) {
  try {
    const json = await fetch(url)
    .then(result => result.json());

    nextUrl = json.info.next;

    if(nextUrl){
        const main = document.querySelector('main');
        json.results.forEach(character => {
        const el = document.createElement('btaj-card');
        el.character = character;
        main.appendChild(el);
      });
    }
  } catch (error) {
    alert(error.message);
  }
  
}