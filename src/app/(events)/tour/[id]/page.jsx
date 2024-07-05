const SingleTour = () => {
    return (
        <main class="main single-gostrol">
            <section class="hero__with-title hero__with-title">
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div class="hero__with-title-container container">
                    <h1 class="hero__with-title-text">Gastroll va dasturlar</h1>
                    <img class="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section class="data">
                <div class="data__container container page-layout">
                    <div class="page-layout__left">
                        <div class="data__banner">
                            <img class="bg" src="/images/data-banner.jpg" alt="banner" />
                        </div>
                        <div class="data__row row">
                            <div class="row__right">
                                <div class="row__title data__title">Marg’ilon darvishona</div>
                                <div class="row__date">
                                    <img class="row__icon" src="/icons/data-calendar.svg" alt="" />
                                    <div class="row__time">08.03.24 23:23</div>
                                </div>

                            </div>
                            <div class="row__left period">
                                <div class="period__period">
                                    <div class="period__date">
                                        <div class="period__day">25</div>
                                        <div class="period__month">May</div>
                                    </div>
                                    <div class="period__line"></div>
                                    <div class="period__date">
                                        <div class="period__day">09</div>
                                        <div class="period__month">Avgust</div>
                                    </div>
                                </div>
                                <div class="period__location">
                                    <img class="period__location-icon" src="/icons/data-location.svg"
                                        alt="location" />
                                    <div class="period__location-text">100011, O'zbekiston, Shahar: Toshkent,
                                        Tuman: Yunusobod, Navoiy shoh ko'chasi, 2</div>
                                </div>
                            </div>

                        </div>
                        <div class="data__text">
                            <p>
                                Rossiya poytaxtining “Vnukovo-2” aeroportida davlatimiz rahbarini Rossiya Federatsiyasi
                                Hukumati Raisining o‘rinbosari –
                                sanoat va savdo vaziri Denis Manturov va boshqa rasmiy shaxslar kutib oldi.
                            </p>
                            <p>
                                Oliy martabali mehmon sharafiga O‘zbekiston va Rossiya davlat bayroqlari ko‘tarildi,
                                faxriy qorovul saf tortdi.
                                Tantanali kutib olish marosimi bo‘ldi.
                            </p>
                            <p>
                                Tashrif dasturiga muvofiq, 6 oktyabr kuni ikki mamlakat yetakchilari tor va
                                kengaytirilgan tarkibda muzokara
                                o‘tkazadilar. O‘zbekiston bilan Rossiya o‘rtasidagi keng qamrovli strategik sheriklik va
                                ittifoqchilik munosabatlarini
                                yanada mustahkamlash masalalari muhokama qilinadi.
                            </p>
                            <p>
                                Siyosiy, savdo-iqtisodiy, investitsiyaviy, transport-kommunikatsiyaviy,
                                madaniy-gumanitar va boshqa ustuvor
                                yo‘nalishlarda har tomonlama hamkorlikning holati va istiqbollarini ko‘rib chiqish
                                rejalashtirilgan. Mintaqaviy va
                                xalqaro kun tartibidagi dolzarb masalalar yuzasidan fikr almashiladi.
                            </p>
                        </div>
                    </div>
                    <div class="page-layout__right">
                        <div class="page-layout__adresses addresses-menu">
                            <div class="addresses-menu__title sidebar-title">
                                Manzillar
                            </div>
                            <ul class="addresses-menu__list">
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li class="addresses-menu__item active">
                                    <img class="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div class="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <sectio class="modal">
                <div class="modal__content ">
                    <div class="modal__body location-modal">
                        <div class="location-modal__header">
                            <div class="location-modal__title">Abdulla Qaxxor madaniyat uyi</div>
                            <img class="location-modal__close-btn" src="/icons/close.svg" />
                        </div>
                        <div class="location-modal__subheader">
                            16 May - 23:23
                        </div>
                        <div class="location-modal__map">
                            <img class="bg" src="/images/map.jpg" alt="map" />
                            <img class="location-modal__rectangle" src="/images/white-rectangle.png" alt="" />
                            <div class="location-modal__row">
                                <img class="location-modal__icon" src="/icons/location.svg" alt="location" />
                                <p class="location-modal__text">O'zbekiston, Toshkent, Uch-tepa tumani, ko'chasi FARHOD,
                                    21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </sectio> */}
        </main>
    )
}

export default SingleTour