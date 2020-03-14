class btajCard extends HTMLElement {
  constructor(){
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set character({image, name, species}){
    const style = document.createElement('style');
    style.textContent=`
      figure, p,h1 {
        padding: 0;
        margin: 0;
      }
      .card{
        border-radius: 10px;
        background-color: #292e3a;
        color: #ffffff;
        padding: 10px;
      }

      .card:hover{
        background-color: #444a56;
      }
  
      .card figure{
        margin-bottom: 10px;
      }
  
      .card .description {
        background-color: #171c28;
        border-radius: 10px;
        padding: 10px;
      }`;

    this.root.innerHTML = `
          <div class="card">
            <figure>
              <img src=${image} alt=${name}>
            </figure>
            <div class="description">
              <p>${name}</p>
              <p>${species}</p>
            </div>
          </div>`;
    this.root.appendChild(style);
  }
}

customElements.define('btaj-card', btajCard);