import StanduppersCards from "./_component/StanduppersCards";

const StandUppers = () => {
    return (
        <main class="main stand-upper">
            <section class="hero__with-title hero__with-title">
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div class="hero__with-title-container container">
                    <h1 class="hero__with-title-text">ASKIYACHILAR</h1>
                    <img class="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section class="data">
                <div class="data__container container page-layout">
                    <div class="page-layout__left">
                        <StanduppersCards />
                    </div>
                    <div class="page-layout__right">
                        <div class="page-layout__types filter">
                            <div class="filter__title">Filtr</div>
                            <div class="filter__subtitle">Askiyachilar</div>
                            <ul class="filter__list">
                                <li>
                                    <label class="filter__container">Barchasi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">Vafot etganlar
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">Yangi askiyachilar
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                            <div class="filter__subtitle">Askiyachilar</div>
                            <ul class="filter__list">
                                <li>
                                    <label class="filter__container">Barchasi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">Qiziqchi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">Aktyor
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">Baxshi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="filter__container">So‘z ustasi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default StandUppers;