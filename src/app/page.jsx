"use client"
import { useEffect } from "react"

import "./home.scss"

export default function Home() {
    return (
        <section className="home-info">
            <div className="home-info__inner">
                <h1>MaSStiK is a <text-primary>web designer</text-primary> and <text-primary>front-end developer</text-primary></h1>
                <p className="text-gray">He crafts responsive websites where technologies meet creativity</p>
                <button className="primary">Contact me!!</button>
            </div>
        </section>
    )
}
