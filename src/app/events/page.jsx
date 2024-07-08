"use client";

import { useSearchParams } from "next/navigation";
import TabSearchParams from "../components/TabSearchParams/TabSearchParams";
import { SimpleGrid } from "@chakra-ui/react";
import GostrolCards from "./_components/GostrolCards";
import ProgramCards from "./_components/ProgramCards";


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
                                <ProgramCards />
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