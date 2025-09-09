const burger = document.querySelector('.burger');
const fallMenu = document.querySelector('.fall-menu');
const burgerLi = document.querySelectorAll('.burger li');

let isOpen = false;

burger.addEventListener('click', function() {
    if(isOpen) {
        isOpen = false;
        fallMenu.style.transform = 'translateY(-130%)';
        burgerLi[0].style.transform = 'translateY(0px) rotate(0deg)';

        burgerLi[1].style.width = '100%';

        burgerLi[2].style.transform = 'translateY(0px) rotate(0deg';
    } 
     else {
        fallMenu.style.transform = 'translateY(0%)';
        burgerLi[0].style.transform = 'translateY(9px) rotate(-45deg)';

        burgerLi[1].style.width = '0px';

        burgerLi[2].style.transform = 'translateY(-9px) rotate(45deg';
        isOpen = true;
    } 
})