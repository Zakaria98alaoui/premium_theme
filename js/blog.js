// javaScript object for youtube
let cardsYtb = document.querySelector("#blog .container > .cards");
let yotubeJSONObject = [
  {
    image: `/assets/images/youtube/fullstack.png`,
    title: `100k Subscribers On YouTube - 5 Things I Learned`,
    description: `100k Subscribers On YouTube - 5 Things I Learned...`,
    date: `09/10/2021`,
  },
  {
    image: `/assets/images/youtube/5tips.png`,
    title: `5 Tips for Crushing Developer Interviews`,
    description: `Here are 5 ways you can improve your chances of doing well in a developer interview....`,
    date: `03/09/2021`,
  },
  {
    image: `/assets/images/youtube/filter.png`,
    title: `JavaScript Array Filter Method Practice in 5 Minutes`,
    description: `JavaScript arrays have some powerful built-in methods that simplify working with them. Let's look at...`,
    date: `01/04/2021`,
  },
  {
    image: `/assets/images/youtube/betterimage.jpg`,
    title: `Next.js 10 Image Component - A First Look`,
    description: `Let's take a first look at the Next.js 10 Image Component....`,
    date: `12/16/2020`,
  },

  {
    image: `/assets/images/youtube/change.png`,
    title: `5 Things I've Learned From Creating YouTube Videos`,
    description: `Creating YouTube videos has changed my life. Here's 5 things I've learned!...`,
    date: `11/10/2020`,
  },
];
window.addEventListener("load", () => {
  // functionthat takes two params first is dataObect sec param is elemnt selected in the Dom
  function getDataYtb() {
    let htmlYTBData = yotubeJSONObject
      .map((item) => {
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
        `;
      })
      .join("");
    cardsYtb.innerHTML = htmlYTBData;
  }
  // set data to the blog page
  getDataYtb();
});
