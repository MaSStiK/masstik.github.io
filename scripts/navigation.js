// script by MaSStiK https://github.com/MaSStiK

window.scrollTo(0, 0) // Фикс координат

let lastNavigation = "#navigation__button-header" // Последняя наведенная вкладка
let navigationButtons = document.querySelectorAll(".navigation__button")

// -----header-----
const buttonHeader = document.querySelector("#navigation__button-header")
document.querySelector("header").onmouseenter = () => {
    buttonHeader.classList.add("navigation__button-active")
    lastNavigation = "#navigation__button-header"
}
document.querySelector("header").onmouseleave = () => {
    buttonHeader.classList.remove("navigation__button-active")
}
buttonHeader.onclick = () => { // При нажатие на навигации помечаем кнопку активной а старую активную выключаем
    navigationButtons.forEach((element) => {
        element.classList.remove("navigation__button-active")
    })
    buttonHeader.classList.add("navigation__button-active")
}

// -----web-----
const buttonWeb = document.querySelector("#navigation__button-web")
document.querySelector(".web").onmouseenter = () => {
    buttonWeb.classList.add("navigation__button-active")
    lastNavigation = "#navigation__button-web"
}
document.querySelector(".web").onmouseleave = () => {
    buttonWeb.classList.remove("navigation__button-active")
}
buttonWeb.onclick = () => {
    navigationButtons.forEach((element) => {
        element.classList.remove("navigation__button-active")
    })
    buttonWeb.classList.add("navigation__button-active")
}

// -----photoshop-----
const buttonPhotoshop = document.querySelector("#navigation__button-photoshop")
document.querySelector(".photoshop").onmouseenter = () => {
    buttonPhotoshop.classList.add("navigation__button-active")
    lastNavigation = "#navigation__button-photoshop"
}
document.querySelector(".photoshop").onmouseleave = () => {
    buttonPhotoshop.classList.remove("navigation__button-active")
}
buttonPhotoshop.onclick = () => {
    navigationButtons.forEach((element) => {
        element.classList.remove("navigation__button-active")
    })
    buttonPhotoshop.classList.add("navigation__button-active")
}

// -----lastNavigation-----
document.querySelector(".navigation").onmouseenter = () => { // Последний наведенный блок остается выделиным в навигации
    document.querySelector(lastNavigation).classList.add("navigation__button-active")
}
document.querySelector(".navigation").onmouseleave = () => {
    document.querySelector(lastNavigation).classList.remove("navigation__button-active")
}