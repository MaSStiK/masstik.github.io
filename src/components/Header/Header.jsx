"use client"
import Image from "next/image";
import Link from "next/link"
import NavLink from "@/components/NavLink/NavLink"
import { useLocalization, Languages } from "@/components/Localization/Localization";
import Logo from "@/components/Logo/Logo"


import "./Header.scss"

export default function Header() {
    const Loc = useLocalization("Header")
    // Локализация
    // const Loc = useLocalization("Header")
    // const Lang = useLang()

    // Смена языка
    // function changeLang(value) {
    //     // Если язык не тот же - переносим на другой язык сохраняя путь
    //     if (!Pathname.startsWith(`/${value}/`)) {
    //         let newPathname = Pathname.replace(`/${Lang}/`, `/${value}/`)
    //         redirect(newPathname)
    //     }
    // }

    return (
        <header>
            <Logo />

            <ul>
                <li><NavLink href="/"><text-primary>#</text-primary>home</NavLink></li>
                <li><NavLink href="/works"><text-primary>#</text-primary>works</NavLink></li>
                <li><NavLink href="/about"><text-primary>#</text-primary>about-me</NavLink></li>
                <li><NavLink href="/contacts"><text-primary>#</text-primary>contacts</NavLink></li>
            </ul>

            {/* en / ru */}
        </header>
    )
}