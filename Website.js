// const hamburger=document.querySelector(".hamburger");
// const navmenu=document.querySelector(".number2 ");
// const list=document.querySelector(".list");

// hamburger.addEventListener("click",() =>{
//     hamburger.classList.toggle("active");
//     navmenu.classList.toggle("active");
   

// })
// document.querySelectorAll(".navlink").forEach(n =>n.addEventListener("click",() => {
//     hamburger.classList.remove("active");
//     navmenu.classList.remove("active");
    
// }))




document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
});
