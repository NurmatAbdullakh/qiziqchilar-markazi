"use client"
import { useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <header className="header">
            <div className="header__container container" >
                <div className="header__burger" onClick={onOpen}>
                    <img src="/icons/burger.svg" alt="burger" />
                </div>

                <Link href="/" className="header__logo">
                    <img src="/images/Logo.png" alt="logo" />
                </Link>
                <div className="header__menu menu">
                    <nav className="menu">

                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link scroll={false} href="/center" className="menu__link">Markaz</Link>
                            </li>
                            <li className="menu__item">
                                <Link scroll={false} href="/standuppers" className="menu__link">So`z ustalari</Link>
                            </li>
                            <li className="menu__item">
                                <Link scroll={false} href="/events?type=gastrollar" className="menu__link">Gastroll</Link>
                            </li>
                            <li className="menu__item">
                                <Link scroll={false} href="/events?type=dasturlar" className="menu__link">Dasturlar</Link>
                            </li>
                            <li className="menu__item">
                                <Link scroll={false} href="/news" className="menu__link">Yangiliklar</Link>
                            </li>
                            <li className="menu__item">
                                <Link scroll={false} href="/mediateka?type=fotogalereya" className="menu__link">Mediateka</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__services">
                    <div className="header__lang-select">
                        <img src="/icons/earth.svg" alt="earth" />
                        <div className="lang">UZ</div>
                        <img src="/icons/arrowDown.svg" alt="arrow-down" />
                        <div />
                        <Link href="/contacts">
                            <button className="header__button">
                                Bog‘lanish
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <BurgerMenu isOpen={isOpen} onClose={onClose} />
        </header>
    )
}

export default Header