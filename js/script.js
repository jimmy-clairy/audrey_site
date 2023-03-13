// Effect nav-slider
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Effect header
const header = document.querySelector('.header');
const header__logo = document.querySelector('.header__logo');
console.log(header__logo);
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    header.classList.toggle("active", window.scrollY > 10)

    if (window.scrollY > 10) {
        header__logo.src = `./img/logo/logotype-04.png`
    } else {
        header__logo.src = `./img/logo/logotype-05.png`
    }
})