const burger = document.querySelector(".div---header")
const navMenu = document.querySelector("div---header")

burger.addEventListener("click", onClick)

function onClick(e) {
    burger.classList.toggle("active")
}

