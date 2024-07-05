"use client"
import Link from "next/link"

const Footer = () => {
    return (
        <footer class="footer">
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <div class="footer__container container">
                <div class="footer__top">
                    <div class="footer__logo">
                        <img src="/images/Logo.png" alt="logo" />
                    </div>
                    <div class="footer__menu menu">
                        <nav class="menu">
                            <ul class="menu__list">
                                <li class="menu__item label">
                                    <Link href="/center" class="menu__link">Markaz</Link>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Askiyachilar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Gastroll</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Dasturlar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Yangiliklar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Mediateka</a>
                                </li>
                            </ul>
                            <ul class="menu__list">
                                <li class="menu__item label">
                                    <a href="#" class="menu__link">Markaz</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Askiyachilar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Gastroll</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Dasturlar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Yangiliklar</a>
                                </li>
                                <li class="menu__item">
                                    <a href="#" class="menu__link">Mediateka</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div class="footer__mid">
                    <div class="footer__text">
                        117449, Toshkent, st. Qoraqamish ,2A, 1-bino, 330-ofis
                        dushanba-juma 9:00-18:00
                    </div>

                    <nav class="footer__socials">
                        <div class="footer__text">
                            Ijtimoiy tarmoqlarimizga obuna bo’ling:
                        </div>

                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="#" class="footer__link">
                                    <img src="/icons/tg.svg" alt="telegram" />
                                </a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">
                                    <img src="/icons/insta.svg" alt="instagram" />
                                </a>
                            </li>
                            <li class="footer__item">
                                <a href="#" class="footer__link">
                                    <img src="/icons/face.svg" alt="facebook" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__bottom">
                    <div class="footer__text">
                        © 2024 Barcha huquqlar qonun bilan himoyalangan.
                    </div>
                    <div class="footer__dev">
                        <div class="footer__text">
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