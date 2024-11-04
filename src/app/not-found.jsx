"use client"
import { useLocalization } from "@/components/Localization/Localization";

export default function NotFound() {
    const Loc = useLocalization("NotFound")

    return (
        <section>
            <h2>{Loc.error}</h2>
        </section>
    )
}