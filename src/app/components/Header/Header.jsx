const Header = () => {
    return (
        <header class="header">
            <div class="header__container container" >
                <div class="header__burger">
                    <img src="/icons/burger.svg" alt="burger" />
                </div>

                <div class="header__logo">
                    <img src="/images/Logo.png" alt="logo" />
                </div>
                <div class="header__menu menu">
                    <nav class="menu">

                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="./pages/abuot-center/about-center.html" class="menu__link">Markaz</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/stand-upper/stand-upper.html" class="menu__link">So`z ustalari</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/gostrolls/gostrolls.html" class="menu__link">Gastroll</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/program/program.html" class="menu__link">Dasturlar</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/news/news.html" class="menu__link">Yangiliklar</a>
                            </li>
                            <li class="menu__item">
                                <a href="./pages/mediateka/mediateka.html" class="menu__link">Mediateka</a>
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
                        <a href="./pages/contacts/contacts.html">
                            <button class="header__button">

                                Bog‘lanish
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header