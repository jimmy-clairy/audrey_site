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
const headerLogo = document.querySelector('.header__logo');
const lines = document.querySelectorAll('.btn-toggle__line');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 10) {
        header.classList.add("active")
        headerLogo.src = `./img/logo/logotype-04.png`;
        lines.forEach((line) => line.classList.add("active"))
    } else {
        header.classList.remove("active")
        headerLogo.src = `./img/logo/logotype-05.png`;
        lines.forEach((line) => line.classList.remove("active"))
    }
})

const ratio = .1
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach((r) => {
    observer.observe(r)
})