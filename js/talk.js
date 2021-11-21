let cardsTlk = document.querySelector('#talks .container > .cards');
let talksObject = [
  {
    image: `/images/talks/img1.jpg`,
    title: `Lorem ipsum dolor sit, amet consectetur-Placeat, tenetur.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit....`,
    date: `09/10/2021`,
  },
  {
    image: `/images/talks/img2.jpg`,
    title: `Lorem ipsum dolor sit, amet consectetur-Placeat, tenetur.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit....`,
    date: `09/10/2021`,
  },
  {
    image: `/images/talks/img3.png`,
    title: `Lorem ipsum dolor sit, amet consectetur-Placeat, tenetur.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit....`,
    date: `09/10/2021`,
  },
  {
    image: `/images/talks/img4.png`,
    title: `Lorem ipsum dolor sit, amet consectetur-Placeat, tenetur.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit....`,
    date: `09/10/2021`,
  },

  {
    image: `/images/talks/img5.png`,
    title: `Lorem ipsum dolor sit, amet consectetur-Placeat, tenetur.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit....`,
    date: `09/10/2021`,
  },
];

window.addEventListener('load', ()=>{
   let addContentToTolksPage = ()=>{
    HTMLTalksString = talksObject.map((item) =>{
        return `
        <div class="card">
        <div class="card-img">
            <a href="#">
                <img src="${item.image}" alt="${item.image}">
            </a>
        </div>
        <div class="card-content">
            <h2 class="card-title">
                <a href="#">${item.title}</a>
            </h2>
            <p class="card-description">
                ${item.description}
            </p>
            <p class="card-date"><small>${item.date}</small></p>
        </div>
    </div>
        `
    }).join('')
        cardsTlk.innerHTML = HTMLTalksString
   }
   addContentToTolksPage()
})


