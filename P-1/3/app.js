// Scroll to top

const Scrolltp = document.querySelector("#scrolltp");
Scrolltp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

window.addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
        this.scrolltp.style.opacity = 1;
    } else {
        this.scrolltp.style.opacity = 0;
    }
})


// Toggle Theme 

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
    body.classList.add("dark");
    themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
    body.classList.toggle("dark");

if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
} else {
    localStorage.removeItem("dark");
}
});