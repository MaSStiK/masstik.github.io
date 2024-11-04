"use client"
import Image from "next/image";
import Link from "next/link"
// import { useLang } from "@/components/Localization/Localization";

import imgLogo from "@/assets/logo.svg"

import "./Logo.scss"

export default function Logo() {
    // const Lang = useLang()

    return (
        <Link className="logo-wrapper" href="/">
            <div className="logo">
                <Image
                    src={imgLogo}
                    alt="logo"
                    priority
                    sizes="48px"
                    fill
                />
            </div>
            <h3 className="text-white">MaSStiK</h3>
        </Link>

    )
}