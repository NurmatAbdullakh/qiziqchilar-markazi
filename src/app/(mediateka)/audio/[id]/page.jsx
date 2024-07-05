const SingleAudio = () => {
    return (
        <main class="main single-audio">
            <section class="hero__with-title hero__with-title">
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div class="hero__with-title-container container">

                </div>
            </section>
            <section class="data">
                <div class="data__container container page-layout">
                    <div class="page-layout__left">
                        <div class="data__title">
                            Margilonda respublika askiya va qizikchilik sanati markazi
                            tashkil etildi
                        </div>
                        <div class="page-layout__statistics statistics">
                            <div class="statistics__item">
                                <img src="/icons/statistics/current.svg" alt="calendar" />
                                <div class="statistics__text">O‘zbekiston</div>
                            </div>
                            <div class="statistics__item">
                                <img src="/icons/statistics/calendar.svg" alt="calendar" />
                                <div class="statistics__text">10-oktabr 2023</div>
                            </div>
                            <div class="statistics__item">
                                <img src="/icons/statistics/volume.svg" alt="calendar" />
                                <div class="statistics__text">300</div>
                            </div>
                        </div>
                        <div class="data-audioplayer audioplayer">
                            <div class="audioplayer__image">
                                <img class="bg" src="/images/gallery/gallery 2.jpg" alt="audioplayer" />
                            </div>
                            <div class="audioplayer__info">
                                <div class="audioplayer__title">
                                    Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                    Xamroqulov
                                </div>
                                <div class="audioplayer__control">
                                    <img class="audioplayer__play-icon" src="/icons/play-icon.svg" />
                                    <div class="audioplayer__progress">
                                        <div class="audioplayer__time">07:34</div>
                                        <div class="audioplayer__progress-line"></div>
                                        <div class="audioplayer__time">09:00</div>
                                    </div>
                                    <img class="audioplayer__volume-icon"
                                        src="/icons/statistics/volume.svg" />
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
                        <div class="page-layout__types types-menu">
                            <div class="types-menu__title">Bo‘limlar</div>
                            <ul class="types-menu__list">
                                <li class="types-menu__item active">
                                    <img class="types-menu__icon" src="/icons/starsActive.svg" />
                                    <div class="types-menu__label">Gastrollar</div>
                                </li>
                                <li class="types-menu__item active">
                                    <img class="types-menu__icon" src="/icons/stars.svg" />
                                    <div class="types-menu__label">Dasturlar</div>
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