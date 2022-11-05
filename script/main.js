window.scrollTo(0, 0) // что бы координаты оставались нормальными

let headerText = document.querySelector(".header-container__text")
let professions = ["Web-Developer", "Photo-Editor", "Game-Maker", "Bot-Maker"]
let i = 0
headerText.textContent = professions[i]
setInterval(() => {
    i++
    if (i == professions.length)
        i = 0
    headerText.textContent = professions[i]
    
}, 1000)


let buttonMain = document.querySelector("#navigation__button-main")
let buttonMainCords = document.querySelector("header").getBoundingClientRect()

let buttonWeb = document.querySelector("#navigation__button-web")
let buttonWebCords = document.querySelector(".web-work").getBoundingClientRect()

let buttonPhotoshop = document.querySelector("#navigation__button-photoshop")
let buttonPhotoshopCords = document.querySelector(".photoshop-work").getBoundingClientRect()

let buttonGame = document.querySelector("#navigation__button-game")
let buttonLink = document.querySelector("#navigation__button-link")

window.addEventListener("scroll", () => {
    const offsetX = window.pageYOffset
    console.log(offsetX)
    console.log(buttonWebCords.top)
    if (offsetX >= buttonMainCords.top && offsetX < (buttonWebCords.top - buttonWebCords.top * 0.4)) {
        buttonMain.classList.add("navigation__button-active")
    } else {
        buttonMain.classList.remove("navigation__button-active")
    }

    if (offsetX >= (buttonWebCords.top - buttonWebCords.top * 0.4) && offsetX < (buttonPhotoshopCords.top - buttonPhotoshopCords.top * 0.2)) {
        buttonWeb.classList.add("navigation__button-active")
    } else {
        buttonWeb.classList.remove("navigation__button-active")
    }

    if (offsetX >= (buttonPhotoshopCords.top - buttonPhotoshopCords.top * 0.2) && offsetX < (buttonPhotoshopCords.top - buttonPhotoshopCords.top * 0.2 + 500)) {
        buttonPhotoshop.classList.add("navigation__button-active")
    } else {
        buttonPhotoshop.classList.remove("navigation__button-active")
    }
})