// script by MaSStiK https://github.com/MaSStiK

const headerText = document.querySelector(".header-container__text")
const professions = ["Web-Developer", "Photo-Editor", "Bot-Maker", "Game-Maker"]
let i = 0
headerText.textContent = professions[i]
setInterval(() => {
    i++
    if (i == professions.length)
        i = 0
    headerText.textContent = professions[i]
}, 1000)