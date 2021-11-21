let coursesObjectData = [
    {
      image: `/images/courses/courseOne.png`,
      title: `React and Serverless - Fullstack Development`,
      description: `Learn to build a secure and production-ready fullstack application from start to finish. By then end...`,
      date: `09/10/2021`,
    },
    {
      image: `/images/courses/html,css,js.png`,
      title: `Build a Quiz App with HTML, CSS, and JavaScript`,
      description: `Want to improve your core Web Develoment skills? Want to improve your knowledge of HTML, CSS, and Ja...`,
      date: `03/09/2021`,
    },
    {
      image: `/images/courses/vsCode.png`,
      title: `Learn Visual Studio Code`,
      description: `Improve your efficiency and proficiency as a developer by learning everything you need to know about...`,
      date: `01/04/2021`,
    },
    {
      image: `/images/courses/node.png`,
      title: `Design and Build a Chat App with Socket.io`,
      description: `Learn design and build a chat application using Node and Socket.io by using modern web features: Fle...`,
      date: `12/16/2020`,
    },
  
  ];
let cardsCoursesElement = document.querySelector('#courses .container >.cards');

window.addEventListener('load', ()=>{
    let addContentToCoursesPage = ()=>{
     HTMLCoursesString = coursesObjectData.map((item) =>{
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
     cardsCoursesElement.innerHTML = HTMLCoursesString
    }
    addContentToCoursesPage()
 })