"use client"
import EN from "./EN"
import RU from "./RU"

export const Languages = {
    ru: {title: "Russian", data: RU},
    en: {title: "English", data: EN},
    fr: {title: "French", data: EN},
}

export function useLocalization(category) {
    // if (window === undefined) return {}

    let language
    if (localStorage.language) { // Если язык сохранен - берем из localStorage
        language = localStorage.language
    } else { // Если язык не сохранен - сохраняем язык по умолчанию
        language = navigator.language.substring(0,2) // По умолчанию язык системы
        localStorage.language = language
        console.log("Set default language: " + language)
    }

    if (!Languages[language]) { // Если не найден язык, то меняем на язык по умолчанию (En)
        language = "en"
        localStorage.language = "en"
        console.log("Unknown language, set default: " + language)
    }

    // console.log("language", language)
    // console.log("Languages[language]", Languages[language])

    return Languages[language].data[category]
}