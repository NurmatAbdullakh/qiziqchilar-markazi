"use client"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <div className="footer__container container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <img src="/images/Logo.png" alt="logo" />
                    </div>
                    <div className="footer__menu menu">
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item label">
                                    <Link href="/center" className="menu__link">Markaz</Link>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Askiyachilar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Gastroll</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Dasturlar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Yangiliklar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Mediateka</a>
                                </li>
                            </ul>
                            <ul className="menu__list">
                                <li className="menu__item label">
                                    <a href="#" className="menu__link">Markaz</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Askiyachilar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Gastroll</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Dasturlar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Yangiliklar</a>
                                </li>
                                <li className="menu__item">
                                    <a href="#" className="menu__link">Mediateka</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div className="footer__mid">
                    <div className="footer__text">
                        117449, Toshkent, st. Qoraqamish ,2A, 1-bino, 330-ofis
                        dushanba-juma 9:00-18:00
                    </div>

                    <nav className="footer__socials">
                        <div className="footer__text">
                            Ijtimoiy tarmoqlarimizga obuna bo’ling:
                        </div>

                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    <img src="/icons/tg.svg" alt="telegram" />
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    <img src="/icons/insta.svg" alt="instagram" />
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">
                                    <img src="/icons/face.svg" alt="facebook" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__bottom">
                    <div className="footer__text">
                        © 2024 Barcha huquqlar qonun bilan himoyalangan.
                    </div>
                    <div className="footer__dev">
                        <div className="footer__text">
                            Разработано
                        </div>
                        <img src="/icons/dev.svg" alt="dev" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer