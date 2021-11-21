// javaScript object for streames
let streamsJSONObject = [
    {
        image : `/images/twitch/alexandra.png`,
        title : `College + Career Find Your Passion with Alexandria Pigram`,
        date : `09/10/2021`
    },
    {
        image : `/images/twitch/brayan.png`,
        title : `Autocomplete with Algolia with Bryan Robinson`,
        date : `09/10/2021`
    },
    {
        image : `/images/twitch/debBie.png`,
        title : `From Vue to React with Debbie O'Brien`,
        date : `09/10/2021`
    },
    {
        image : `/images/twitch/franciesco.png`,
        title : `Developer Advocacy with Francesco Ciulla`,
        date : `09/10/2021`
    },
    {
        image : `/images/twitch/jhonson.png`,
        title : `Web Vibes with Vonta with DeVonta Johnson`,
        date : `09/10/2021`
    },
];
let cardStreames = document.querySelector('#streames .container > .cards');
window.addEventListener('load', ()=>{
    function getDataTwitch(){
        let htmlTWITCHData = streamsJSONObject.map((item)=>{
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
                <p class="card-date"><small>${item.date}</small></p>
            </div>
        </div>
            `
        }).join('')
        cardStreames.innerHTML = htmlTWITCHData
        console.log(htmlTWITCHData);
    }
    getDataTwitch();
})