"use client";
import { useState } from "react";
import { useGetAllByUrlQuery } from "../../api/api.service";
import { getItems } from "../../utils/getItems";
import Team from "./_components/Team/Team";
import TeamModal from "./_components/TeamModal/TeamModal";
import Locations from "./_components/Locations/Locations";

const Center = () => {
    const { data: aboutData } = useGetAllByUrlQuery('markaz-haqida')
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const centerData = aboutData?.data?.data?.attributes


    return (
        <main className="main about-center">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">Markaz</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section className="about-us">
                <img className="about-us__banner" src="/images/about-banner.jpg" alt="banner" />
                <img className="about-us__rectangle-bottom" src="/images/white-rectangle.png" alt="banner" />
                <div className="about-us__container container">

                    <div className="about-us__title">
                        <h2 className="title">Biz haqimizda</h2>
                    </div>
                    <div className="about-us__line"></div>
                    <div className="about-us__text">
                        <p>{centerData?.description_uz}</p>
                    </div>

                    <div className="about-us__boxes">
                        <div className="about-us__box box">
                            <img className="box__img" src="/icons/box/icon.svg" alt="" />
                            <h3 className="box__title">{centerData?.number_of_employees}</h3>
                            <p className="box__text"> Xodimlar</p>
                        </div>
                        <div className="about-us__box box">
                            <img className="box__img" src="/icons/box/icon 1.svg" alt="" />
                            <h3 className="box__title">{centerData?.number_of_comic}</h3>
                            <p className="box__text"> Qiziqchilar</p>
                        </div>
                        <div className="about-us__box box">
                            <img className="box__img" src="/icons/box/icon 2.svg" alt="" />
                            <h3 className="box__title">{centerData?.number_of_tours}</h3>
                            <p className="box__text">Gastrollar</p>
                        </div>
                        <div className="about-us__box box">
                            <img className="box__img" src="/icons/box/icon 3.svg" alt="" />
                            <h3 className="box__title">{centerData?.number_of_programs}</h3>
                            <p className="box__text">Dasturlar</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="system">
                <div className="system__container container">
                    <div className="system__title section-title">
                        <div className="section-title__title">Tashkiliy tuzulma</div>
                        <div className="section-title__divider"></div>
                    </div>
                    <div className="system__layer-1">
                        <div className="text">
                            Исполнительный комитет Центрального Совета Союза Молодежи Узбекистан
                        </div>
                        <div className="arrow">
                            <img src="/icons/systemArrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div className="system__layer-2">
                        <div className="text">Председатель</div>
                        <div className="arrow">
                            <img src="/icons/systemArrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div className="system__layer-3">
                        <div className="text">Заместитель председателя </div>
                        <div className="line"></div>
                    </div>
                    <div className="system__multi-arrow">
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                        <img src="/icons/systemArrow.svg" alt="arrow" />
                    </div>
                    <div className="system__layer-4">
                        <div className="text">
                            Отдел по работе с обучающейся узбекистанской молодежью за рубежом
                        </div>
                        <div className="text">
                            Отдел по работе с трудящейся узбекистанской молодежью за рубежом
                        </div>
                        <div className="text">
                            Отдел по сотрудничеству с узбекскими диаспорами за рубежом
                        </div>
                    </div>
                </div>
            </section>
            <Team onClick={setSelectedEmployee} />
            <section className="school">
                <div className="school__container container">
                    <div className="school__title section-title">
                        <div className="section-title__title">Mahorat maktablari</div>
                        <div className="section-title__divider"></div>
                    </div>
                </div>
                <div className="locations__container container">
                    <Locations />
                </div>
            </section>
            {selectedEmployee && <TeamModal onClose={() => setSelectedEmployee(null)} selectedEmployee={selectedEmployee} />}

            {/* <sectio className="modal">
                <div className="modal__content ">
                    <div className="modal__body location-modal">
                        <div className="location-modal__header">
                            <div className="location-modal__title">Hududiy boshqarmalar</div>
                            <img className="location-modal__close-btn" src="/icons/close.svg" />
                        </div>
                        <div className="location-modal__banner">
                            <img className="bg" src="/images/gallery/gallery 8.jpg" alt="" />
                        </div>
                        <div className="location-modal__info-row">
                            <img className="location-modal__icon" src="/icons/location-modal/mail.svg" alt="" />
                            <a href="mailto:info.@askiyamarkazi.uz"
                                className="location-modal__label">info.@askiyamarkazi.uz</a>
                        </div>
                        <div className="location-modal__info-row">
                            <img className="location-modal__icon" src="/icons/location-modal/phone.svg" alt="" />
                            <a href="tel:+998 71 200 70 07" className="location-modal__label">+998 71 200 70 07</a>
                            <div className="location-modal__socials">
                                <a href="" className="location-modal__social">
                                    <img className="" src="/icons/location-modal/telegram.svg" alt="" />
                                </a>
                                <a href="" className="location-modal__social">
                                    <img className="" src="/icons/location-modal/instagram.svg" alt="" />
                                </a>
                                <a href="" className="location-modal__social">
                                    <img className="" src="/icons/location-modal/facebook.svg" alt="" />
                                </a>
                            </div>

                        </div>
                        <div className="location-modal__info-row">
                            <img className="location-modal__icon" src="/icons/location-modal/clock.svg" alt="" />
                            <span className="location-modal__label">22:00 ga qadar ochiq</span>
                        </div>
                        <div className="location-modal__text">
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