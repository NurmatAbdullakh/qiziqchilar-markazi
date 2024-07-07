const SingleAudio = () => {
    return (
        <main className="main single-audio">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">

                </div>
            </section>
            <section className="data">
                <div className="data__container container page-layout">
                    <div className="page-layout__left">
                        <div className="data__title">
                            Margilonda respublika askiya va qizikchilik sanati markazi
                            tashkil etildi
                        </div>
                        <div className="page-layout__statistics statistics">
                            <div className="statistics__item">
                                <img src="/icons/statistics/current.svg" alt="calendar" />
                                <div className="statistics__text">O‘zbekiston</div>
                            </div>
                            <div className="statistics__item">
                                <img src="/icons/statistics/calendar.svg" alt="calendar" />
                                <div className="statistics__text">10-oktabr 2023</div>
                            </div>
                            <div className="statistics__item">
                                <img src="/icons/statistics/volume.svg" alt="calendar" />
                                <div className="statistics__text">300</div>
                            </div>
                        </div>
                        <div className="data-audioplayer audioplayer">
                            <div className="audioplayer__image">
                                <img className="bg" src="/images/gallery/gallery 2.jpg" alt="audioplayer" />
                            </div>
                            <div className="audioplayer__info">
                                <div className="audioplayer__title">
                                    Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                    Xamroqulov
                                </div>
                                <div className="audioplayer__control">
                                    <img className="audioplayer__play-icon" src="/icons/play-icon.svg" />
                                    <div className="audioplayer__progress">
                                        <div className="audioplayer__time">07:34</div>
                                        <div className="audioplayer__progress-line"></div>
                                        <div className="audioplayer__time">09:00</div>
                                    </div>
                                    <img className="audioplayer__volume-icon"
                                        src="/icons/statistics/volume.svg" />
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
                        <div className="page-layout__types types-menu">
                            <div className="types-menu__title">Bo‘limlar</div>
                            <ul className="types-menu__list">
                                <li className="types-menu__item active">
                                    <img className="types-menu__icon" src="/icons/starsActive.svg" />
                                    <div className="types-menu__label">Gastrollar</div>
                                </li>
                                <li className="types-menu__item active">
                                    <img className="types-menu__icon" src="/icons/stars.svg" />
                                    <div className="types-menu__label">Dasturlar</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SingleAudio