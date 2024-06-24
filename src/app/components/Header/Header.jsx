import Link from "next/link"

const Header = () => {
    return (
        <header class="header">
            <div class="header__container container" >
                <div class="header__burger">
                    <img src="/icons/burger.svg" alt="burger" />
                </div>

                <Link href="/" class="header__logo">
                    <img src="/images/Logo.png" alt="logo" />
                </Link>
                <div class="header__menu menu">
                    <nav class="menu">

                        <ul class="menu__list">
                            <li class="menu__item">
                                <Link href="/center" class="menu__link">Markaz</Link>
                            </li>
                            <li class="menu__item">
                                <Link href="/standuppers" class="menu__link">So`z ustalari</Link>
                            </li>
                            <li class="menu__item">
                                <Link href="/events" class="menu__link">Gastroll</Link>
                            </li>
                            <li class="menu__item">
                                <Link href="/events" class="menu__link">Dasturlar</Link>
                            </li>
                            <li class="menu__item">
                                <Link href="/news" class="menu__link">Yangiliklar</Link>
                            </li>
                            <li class="menu__item">
                                <Link href="/mediateka" class="menu__link">Mediateka</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header__services">
                    <div class="header__lang-select">
                        <img src="/icons/earth.svg" alt="earth" />
                        <div class="lang">UZ</div>
                        <img src="/icons/arrowDown.svg" alt="arrow-down" />
                        <div />
                        <Link href="/contacts">
                            <button class="header__button">
                                Bog‘lanish
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header