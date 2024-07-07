"use client";

import { useSearchParams } from "next/navigation";
import TabSearchParams from "../components/TabSearchParams/TabSearchParams";
import { SimpleGrid } from "@chakra-ui/react";
import GostrolCards from "./_components/GostrolCards";

const Events = () => {
    const searchParams = useSearchParams()
    const isProgram = searchParams.get("type") === "dasturlar"
    const isGostroll = searchParams.get("type") === "gastrollar"

    return (
        <main className="main program">
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
                        <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
                            {isProgram &&
                                <>
                                    <a href="../single-program/single-program.html">
                                        <div className="data__item program-card">
                                            <img src="/images/jockers/Image (1).jpg" className="program-card__image bg" />
                                            <img src="/images/covers/Image (1).png" className="program-card__cover bg" />
                                            <div className="program-card__info">
                                                <div className="program-card__title">
                                                    Marg’ilon darvishona askiya bazmi
                                                </div>
                                                <div className="program-card__date">
                                                    <div className="program-card__day">20</div>
                                                    <div className="program-card-date">
                                                        <div className="program-card__month">Aprel</div>
                                                        <div className="program-card__year">2024</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="../single-program/single-program.html">
                                        <div className="data__item program-card">
                                            <img src="/images/jockers/Image (2).jpg" className="program-card__image bg" />
                                            <img src="/images/covers/Image (2).png" className="program-card__cover bg" />
                                            <div className="program-card__info">
                                                <div className="program-card__title">
                                                    Marg’ilon darvishona askiya bazmi
                                                </div>
                                                <div className="program-card__date">
                                                    <div className="program-card__day">20</div>
                                                    <div className="program-card-date">
                                                        <div className="program-card__month">Aprel</div>
                                                        <div className="program-card__year">2024</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="../single-program/single-program.html">
                                        <div className="data__item program-card">
                                            <img src="/images/jockers/Image (3).jpg" className="program-card__image bg" />
                                            <img src="/images/covers/Image (3).png" className="program-card__cover bg" />
                                            <div className="program-card__info">
                                                <div className="program-card__title">
                                                    Marg’ilon darvishona askiya bazmi
                                                </div>
                                                <div className="program-card__date">
                                                    <div className="program-card__day">20</div>
                                                    <div className="program-card-date">
                                                        <div className="program-card__month">Aprel</div>
                                                        <div className="program-card__year">2024</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="../single-program/single-program.html">
                                        <div className="data__item program-card">
                                            <img src="/images/jockers/Image.jpg" className="program-card__image bg" />
                                            <img src="/images/covers/Image.png" className="program-card__cover bg" />
                                            <div className="program-card__info">
                                                <div className="program-card__title">
                                                    Marg’ilon darvishona askiya bazmi
                                                </div>
                                                <div className="program-card__date">
                                                    <div className="program-card__day">20</div>
                                                    <div className="program-card-date">
                                                        <div className="program-card__month">Aprel</div>
                                                        <div className="program-card__year">2024</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </>
                            }
                            {isGostroll && <GostrolCards />}
                        </SimpleGrid>
                    </div>
                    <div className="page-layout__right">
                        <TabSearchParams tabs={
                            [

                                {
                                    label: "Gastrollar",
                                    value: "gastrollar"
                                },
                                {
                                    label: "Dasturlar",
                                    value: "dasturlar"
                                },
                            ]
                        } />
                    </div>
                </div>
            </section>
        </main >


    )
}

export default Events;