"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavLink({ children, href }) {
    const pathname = usePathname()

    return (
        <Link href={href} className={pathname === href ? "active" : undefined}>{children}</Link>
    )
}