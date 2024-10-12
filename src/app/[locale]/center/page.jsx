"use client";
import { useState } from "react";
import { useGetAllByUrlQuery } from "../../../api/api.service";
import Team from "./_components/Team/Team";
import TeamModal from "./_components/TeamModal/TeamModal";
import Locations from "./_components/Locations/Locations";
import { getImageUrl } from "../../../utils/getImageUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import BredCrumbs from "../../components/BredCrumbs";
import { useParams } from "next/navigation";

const Center = () => {
    const { locale } = useParams()
    const { data: aboutData } = useGetAllByUrlQuery('markaz-haqida')
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)
    const centerData = aboutData?.data?.data?.attributes

    const bredCrumbs = [
        {
            title: "Markaz",
            link: "/center"
        }
    ]

    return (
        <main className="main about-center">
            <BredCrumbs items={bredCrumbs} />
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
                        <p>{centerData?.[`description_${locale}`]}</p>
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
                    <Locations onIconClick={setSelectedLocation} />
                </div>
            </section>
            {selectedEmployee && <TeamModal onClose={() => setSelectedEmployee(null)} selectedEmployee={selectedEmployee} />}
            {selectedLocation &&
                <Modal isOpen={!!selectedLocation} onClose={() => setSelectedLocation(null)}>
                    <ModalOverlay />
                    <ModalContent maxW={"600px"} bg="transparent" onClose={() => setSelectedLocation(null)}>
                        <div className="modal__content ">
                            <div className="modal__body location-modal">
                                <div className="location-modal__header">
                                    <div className="location-modal__title">{selectedLocation?.maktab_nomi}</div>
                                    <img onClick={() => setSelectedLocation(null)} className="location-modal__close-btn" src="/icons/close.svg" />
                                </div>
                                <div className="location-modal__banner">
                                    <img className="bg" src={getImageUrl(selectedLocation)} alt="" />
                                </div>
                                <div className="location-modal__info-row">
                                    <img className="location-modal__icon" src="/icons/location-modal/mail.svg" alt="" />
                                    <a href={`mailto:${selectedLocation?.email_manzili}`}
                                        className="location-modal__label">{selectedLocation?.email_manzili}</a>
                                </div>
                                <div className="location-modal__info-row">
                                    <img className="location-modal__icon" src="/icons/location-modal/phone.svg" alt="" />
                                    <a href={`tel:${selectedLocation?.telefon_raqami}`} className="location-modal__label">{selectedLocation?.telefon_raqami}</a>
                                    {/* <div className="location-modal__socials">
                                        <a href="" className="location-modal__social">
                                            <img className="" src="/icons/location-modal/telegram.svg" alt="" />
                                        </a>
                                        <a href="" className="location-modal__social">
                                            <img className="" src="/icons/location-modal/instagram.svg" alt="" />
                                        </a>
                                        <a href="" className="location-modal__social">
                                            <img className="" src="/icons/location-modal/facebook.svg" alt="" />
                                        </a>
                                    </div> */}
                                </div>
                                <div className="location-modal__info-row">
                                    <img className="location-modal__icon" src="/icons/location-modal/clock.svg" alt="" />
                                    <span className="location-modal__label">{selectedLocation?.yopilish_vaqti?.slice(0, 5)} ga qadar ochiq</span>
                                </div>
                                <div className="location-modal__text">
                                    {selectedLocation?.[`description_${locale}`] && <BlocksRenderer content={selectedLocation?.[`description_${locale}`]} />}
                                </div>
                            </div>
                        </div>
                    </ModalContent>
                </Modal>}
        </main >


    )
}

export default Center;