"use client"

import {
    Menu, MenuButton, MenuItem, MenuList, useDisclosure
} from "@chakra-ui/react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useTranslations } from "next-intl";
import {
    locales,
    usePathname,
    useRouter,
    Link
} from "../../../i18n.config";
import { useParams, useSearchParams } from "next/navigation";


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();
    const t = useTranslations();

    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());

    const pathname = usePathname();
    const { locale } = useParams()




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
                                <div className="lang">{locale}</div>
                                <img src="/icons/arrowDown.svg" alt="arrow-down" />
                                <div />
                            </div>
                        </MenuButton>
                        <MenuList>
                            {locales.map((locale, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            // params to a string lik query
                                            const query = Object.keys(params).reduce((acc, key) => {
                                                acc[key] = params[key].toString();
                                                return acc;
                                            }, {});



                                            router.replace(`${pathname}?${new URLSearchParams(query).toString()}`, { locale });
                                        }}
                                    >
                                        {locale}
                                    </MenuItem>
                                );
                            })}
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