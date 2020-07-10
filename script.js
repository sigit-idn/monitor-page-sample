const slides = document.querySelector('.slides');

const dot = document.querySelectorAll('.dot')

let i = 1;
// let range = -800 - 32 + 240;
let range = 0;

const phoneWidth = window.matchMedia("(max-width: 576px)");

function slidePrev() {

    if (i > 0) {

        if (phoneWidth.matches) {
            range += 100;
        } else {
            range += 65;
        }

        slides.style.transform = `translateX(${range}vw)`;
        dot[i].classList.remove('active-dot');
        dot[i - 1].classList.add("active-dot");
        i--;
        return range;
    }
}

function slideNext() {

    if (i < 3) {

        if (phoneWidth.matches) {
            range -= 100;
        } else {
            range -= 65;
        }
        slides.style.transform = `translateX(${range}vw`;
        dot[i].classList.remove('active-dot');
        dot[i + 1].classList.add("active-dot");
        i++;
        return range;
    }
}


// Responsive on Mobile

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function () {

    const navMenu = document.querySelector('.nav-menu');

    navMenu.classList.toggle('nav-show');
})