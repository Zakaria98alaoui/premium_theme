let bergerIcon = document.querySelector('.humberger-icon');
let icon = document.querySelector('.humberger-icon i')
let navBar = document.getElementById('navBar')
bergerIcon.addEventListener('click', ()=>{
    navBar.classList.toggle('open')
    if(icon.classList.contains('fa-bars')){
        icon.classList.toggle('fa-close')
    }
})

// go to top of the page button
let btn = document.querySelector('.go-up');

let goUp = ()=>{
    window.onscroll = ()=>{
        if(window.scrollY >= 800){
            btn.style.display = "block"
        }else{
            btn.style.display = "none"
        }
    }
}
goUp();

btn.addEventListener('click',()=>{
    window.scrollTo({
        top : 0,
        left : 0,
    })
})

// // efects
// let ytbSection = document.querySelectorAll('section');
// console.log(ytbSection);
// let strongTitle = document.querySelectorAll('.shortcontent  >h4 >.str');
// // console.log(strongTitleYtb);

// let myEffects = ()=>{
//     window.onscroll = ()=>{
//        ytbSection.forEach((section) =>{
//         if( window.scrollY >= section.offsetTop){
//             strongTitle.forEach((title)=>{
//                 title.style.opacity = "1"; 
//             })
//          }
//        })
//     }
// } 
// myEffects()



