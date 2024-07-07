"use client";
import Link from "next/link";
import { useState } from "react"
import HeroSlider from "../HeroSlider/HeroSlider";

const Hero = () => {
    const [currentData, setCurrentData] = useState(null)
    return (
        <section className="hero">
            <img className="hero__bg bg" src="/images/hero.jpg" alt="banner" />
            <img
                className="hero__overlay bg"
                src="/images/Overlay.png"
                alt=""
            />
            <div className="hero__container container">
                <div className="hero__box">
                    <div className="hero__adress">{currentData?.address_uz}</div>
                    <div className="hero__title">{currentData?.title_uz}</div>
                    <div className="hero__subtitle">{currentData?.text_uz}</div>
                    <Link href={currentData?.Link || ""} className="hero__button">Batafsil</Link>
                    <HeroSlider onChange={setCurrentData} />
                </div>
            </div>
        </section>
    )
}

export default Hero