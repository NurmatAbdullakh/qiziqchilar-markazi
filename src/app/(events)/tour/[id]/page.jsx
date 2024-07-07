const SingleTour = () => {
    return (
        <main className="main single-gostrol">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">Gastroll va dasturlar</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section className="data">
                <div className="data__container container page-layout">
                    <div className="page-layout__left">
                        <div className="data__banner">
                            <img className="bg" src="/images/data-banner.jpg" alt="banner" />
                        </div>
                        <div className="data__row row">
                            <div className="row__right">
                                <div className="row__title data__title">Marg’ilon darvishona</div>
                                <div className="row__date">
                                    <img className="row__icon" src="/icons/data-calendar.svg" alt="" />
                                    <div className="row__time">08.03.24 23:23</div>
                                </div>

                            </div>
                            <div className="row__left period">
                                <div className="period__period">
                                    <div className="period__date">
                                        <div className="period__day">25</div>
                                        <div className="period__month">May</div>
                                    </div>
                                    <div className="period__line"></div>
                                    <div className="period__date">
                                        <div className="period__day">09</div>
                                        <div className="period__month">Avgust</div>
                                    </div>
                                </div>
                                <div className="period__location">
                                    <img className="period__location-icon" src="/icons/data-location.svg"
                                        alt="location" />
                                    <div className="period__location-text">100011, O'zbekiston, Shahar: Toshkent,
                                        Tuman: Yunusobod, Navoiy shoh ko'chasi, 2</div>
                                </div>
                            </div>

                        </div>
                        <div className="data__text">
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
                    <div className="page-layout__right">
                        <div className="page-layout__adresses addresses-menu">
                            <div className="addresses-menu__title sidebar-title">
                                Manzillar
                            </div>
                            <ul className="addresses-menu__list">
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <sectio className="modal">
                <div className="modal__content ">
                    <div className="modal__body location-modal">
                        <div className="location-modal__header">
                            <div className="location-modal__title">Abdulla Qaxxor madaniyat uyi</div>
                            <img className="location-modal__close-btn" src="/icons/close.svg" />
                        </div>
                        <div className="location-modal__subheader">
                            16 May - 23:23
                        </div>
                        <div className="location-modal__map">
                            <img className="bg" src="/images/map.jpg" alt="map" />
                            <img className="location-modal__rectangle" src="/images/white-rectangle.png" alt="" />
                            <div className="location-modal__row">
                                <img className="location-modal__icon" src="/icons/location.svg" alt="location" />
                                <p className="location-modal__text">O'zbekiston, Toshkent, Uch-tepa tumani, ko'chasi FARHOD,
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