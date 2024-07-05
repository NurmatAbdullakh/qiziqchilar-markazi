"use client";
import { useState } from "react";
import { useGetAllByUrlQuery } from "../../api/api.service";
import { getItems } from "../../utils/getItems";
import Team from "./_components/Team/Team";
import TeamModal from "./_components/TeamModal/TeamModal";

const Center = () => {
    const { data: aboutData } = useGetAllByUrlQuery('markaz-haqida')
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const centerData = aboutData?.data?.data?.attributes


    return (
        <main class="main about-center">
            <section class="hero__with-title hero__with-title">
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div class="hero__with-title-container container">
                    <h1 class="hero__with-title-text">Markaz</h1>
                    <img class="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section class="about-us">
                <img class="about-us__banner" src="/images/about-banner.jpg" alt="banner" />
                <img class="about-us__rectangle-bottom" src="/images/white-rectangle.png" alt="banner" />
                <div class="about-us__container container">

                    <div class="about-us__title">
                        <h2 class="title">Biz haqimizda</h2>
                    </div>
                    <div class="about-us__line"></div>
                    <div class="about-us__text">
                        <p>{centerData?.description_uz}</p>
                    </div>

                    <div class="about-us__boxes">
                        <div class="about-us__box box">
                            <img class="box__img" src="/icons/box/icon.svg" alt="" />
                            <h3 class="box__title">{centerData?.number_of_employees}</h3>
                            <p class="box__text"> Xodimlar</p>
                        </div>
                        <div class="about-us__box box">
                            <img class="box__img" src="/icons/box/icon 1.svg" alt="" />
                            <h3 class="box__title">{centerData?.number_of_comic}</h3>
                            <p class="box__text"> Qiziqchilar</p>
                        </div>
                        <div class="about-us__box box">
                            <img class="box__img" src="/icons/box/icon 2.svg" alt="" />
                            <h3 class="box__title">{centerData?.number_of_tours}</h3>
                            <p class="box__text">Gastrollar</p>
                        </div>
                        <div class="about-us__box box">
                            <img class="box__img" src="/icons/box/icon 3.svg" alt="" />
                            <h3 class="box__title">{centerData?.number_of_programs}</h3>
                            <p class="box__text">Dasturlar</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="system">
                <div class="system__container container">
                    <div class="system__title section-title">
                        <div class="section-title__title">Tashkiliy tuzulma</div>
                        <div class="section-title__divider"></div>
                    </div>
                    <div class="system__layer-1">
                        <div class="text">
                            Исполнительный комитет Центрального Совета Союза Молодежи Узбекистан
                        </div>
                        <div class="arrow">
                            <img src="/icons/systemArrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div class="system__layer-2">
                        <div class="text">Председатель</div>
                        <div class="arrow">
                            <img src="/icons/systemArrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div class="system__layer-3">
                        <div class="text">Заместитель председателя </div>
                        <div class="line"></div>
                    </div>
                    <div class="system__multi-arrow">
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                    </div>
                    <div class="system__layer-4">
                        <div class="text">
                            Отдел по работе с обучающейся узбекистанской молодежью за рубежом
                        </div>
                        <div class="text">
                            Отдел по работе с трудящейся узбекистанской молодежью за рубежом
                        </div>
                        <div class="text">
                            Отдел по сотрудничеству с узбекскими диаспорами за рубежом
                        </div>
                    </div>
                </div>
            </section>
            <Team onClick={setSelectedEmployee} />
            <section class="school">
                <div class="school__container container">
                    <div class="school__title section-title">
                        <div class="section-title__title">Mahorat maktablari</div>
                        <div class="section-title__divider"></div>
                    </div>
                </div>
                <div class="locations__container container">
                    <div class="locations__map">

                        <img class="locations__map-image bg" src="/images/map.jpg" />

                        <div class="locations__tabs tabs">
                            <div class="tabs__tab-panel">
                                <div class="locations__items">

                                    <div class="locations__item location active">
                                        <div class="location__title">
                                            <img class="location__icon" src="/icons/schoolIcon.svg" />
                                            <div class="location__text">Farg’ona Maxorat maktabi</div>
                                        </div>
                                        <div class="location__subtitle">
                                            Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi 11uy
                                        </div>
                                    </div>
                                    <div class="locations__item location">
                                        <div class="location__title">
                                            <img class="location__icon" src="/icons/schoolIcon.svg" />
                                            <div class="location__text">Farg’ona Maxorat maktabi</div>
                                        </div>
                                        <div class="location__subtitle">
                                            Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi 11uy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {selectedEmployee && <TeamModal onClose={() => setSelectedEmployee(null)} selectedEmployee={selectedEmployee} />}

            {/* <sectio class="modal">
                <div class="modal__content ">
                    <div class="modal__body location-modal">
                        <div class="location-modal__header">
                            <div class="location-modal__title">Hududiy boshqarmalar</div>
                            <img class="location-modal__close-btn" src="/icons/close.svg" />
                        </div>
                        <div class="location-modal__banner">
                            <img class="bg" src="/images/gallery/gallery 8.jpg" alt="" />
                        </div>
                        <div class="location-modal__info-row">
                            <img class="location-modal__icon" src="/icons/location-modal/mail.svg" alt="" />
                            <a href="mailto:info.@askiyamarkazi.uz"
                                class="location-modal__label">info.@askiyamarkazi.uz</a>
                        </div>
                        <div class="location-modal__info-row">
                            <img class="location-modal__icon" src="/icons/location-modal/phone.svg" alt="" />
                            <a href="tel:+998 71 200 70 07" class="location-modal__label">+998 71 200 70 07</a>
                            <div class="location-modal__socials">
                                <a href="" class="location-modal__social">
                                    <img class="" src="/icons/location-modal/telegram.svg" alt="" />
                                </a>
                                <a href="" class="location-modal__social">
                                    <img class="" src="/icons/location-modal/instagram.svg" alt="" />
                                </a>
                                <a href="" class="location-modal__social">
                                    <img class="" src="/icons/location-modal/facebook.svg" alt="" />
                                </a>
                            </div>

                        </div>
                        <div class="location-modal__info-row">
                            <img class="location-modal__icon" src="/icons/location-modal/clock.svg" alt="" />
                            <span class="location-modal__label">22:00 ga qadar ochiq</span>
                        </div>
                        <div class="location-modal__text">
                            Markazning moddiy-texnika bazasini mustahkamlash va ijodkorlari ijtimoiy sharoitini
                            yaxshilash maqsadida Fargʻona
                            viloyati hokimligi Markazni saqlash va uning faoliyatini qoʻllab-quvvatlash uchun mahalliy
                            byudjetdan 2023 yilda 2,3
                            milliard soʻm, 2024 yildan boshlab esa Markaz talabnomasi asosida zarur mablagʻlar ajratadi.
                        </div>
                    </div>
                </div>
            </sectio> */}
        </main>


    )
}

export default Center;