"use client"

import {
    Menu, MenuButton, MenuItem, MenuList, useDisclosure
} from "@chakra-ui/react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "../../../navigation";


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();
    const t = useTranslations();

    const pathname = usePathname();
    const locales = ["en", "ru", "uz"];

    console.log(router.locale);


    return (
        <header className="header">
            <div className="header__container container" >
                <div className="header__burger" onClick={onOpen}>
                    <img src="/icons/burger.svg" alt="burger" />
                </div>

                <Link href="/" className="header__logo">
                    <img src="/images/Logo.svg" alt="logo" />
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
                    <Menu>
                        <MenuButton >
                            <div className="header__lang-select">
                                <img src="/icons/earth.svg" alt="earth" />
                                <div className="lang">{router.locale}</div>
                                <img src="/icons/arrowDown.svg" alt="arrow-down" />
                                <div />
                            </div>
                        </MenuButton>
                        <MenuList>
                            {
                                locales.map((locale, index) => {
                                    return (
                                        <MenuItem key={index} onClick={() => router.replace("/", { locale })}>
                                            {locale}
                                        </MenuItem>
                                    )
                                })
                            }
                        </MenuList>
                    </Menu>
                    <Link href="/contacts">
                        <button className="header__button">
                            {t("contact")}
                        </button>
                    </Link>
                </div>
            </div>
            <BurgerMenu isOpen={isOpen} onClose={onClose} />
        </header >
    )
}

export default Header