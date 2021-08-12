
const link = document.querySelectorAll('.link');
const nav_link = document.querySelector('.nav__link');
const burger = document.querySelector('.burger');
const close_a = document.querySelector('.menu_close');
let close_burger = false;

burger.addEventListener('click', () => {
    nav_link.classList.toggle("show-menu");
        
    link.forEach((ele, index) => {
        console.log(ele.style.animation);
        if(ele.style.animation){
            ele.style.animation = "";
            console.log("anh");
        }
        else{
            ele.style.animation = `turn_right 0.5s ease-in-out forwards ${index / 7 + 3}s`;
            console.log('not');
        }
    });
    burger.classList.toggle('toggle');
});



