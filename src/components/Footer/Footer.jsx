"use client"
import Image from "next/image";
import Link from "next/link"
import { useLocalization } from "@/components/Localization/Localization";
import Logo from "@/components/Logo/Logo"

import svgGithub from "@/assets/svg/Github.svg"
import svgFigma from "@/assets/svg/Figma.svg"
import svgDiscord from "@/assets/svg/Discord.svg"

import "./Footer.scss"

export default function Footer() {
    const Loc = useLocalization("Footer")

    return (
        <footer>
            <div className="footer-inner">
                <div className="flex-row">
                    <div className="flex-col footer__left">
                        <div className="flex-row">
                            <Logo />
                            <p className="text-gray">mathew.ovchinnikov@gmail.com</p>
                            {/* todo Добавить кнопку копирования почты */}
                        </div>
                        <p>{Loc.web_developer}</p>
                    </div>

                    {/* todo Заменить ссылки */}
                    <div className="flex-col footer__right">
                        <h2>Media</h2>
                        <div className="flex-row">
                            <Link className="footer__right-media" href="/">
                                <Image
                                    src={svgGithub}
                                    alt="github"
                                    sizes="32px"
                                    fill
                                />
                            </Link>
                            <Link className="footer__right-media" href="/">
                                <Image
                                    src={svgFigma}
                                    alt="figma"
                                    sizes="32px"
                                    fill
                                />
                            </Link>
                            <Link className="footer__right-media" href="/">
                                <Image
                                    src={svgDiscord}
                                    alt="discord"
                                    sizes="32px"
                                    fill
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-gray footer__copyright">© Copyright 2022. Made by MaSStiK</p>
            </div>
        </footer>
    )
}