"use client";
import { useSearchParams } from "next/navigation";
import TabSearchParams from "../../components/TabSearchParams/TabSearchParams";
import AudioCards from "./_components/AudioCards";
import VideoCards from "./_components/VideoCards";
import Fotogalereya from "./_components/Fotogalereya";

const Mediateka = () => {
    const searchParams = useSearchParams();

    const isFotogalereya = searchParams.get("type") === "fotogalereya"
    const isAudio = searchParams.get("type") === "audio"
    const isVideo = searchParams.get("type") === "video"

    return (
        <main className="main mediateka">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">Mediateka</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section className="data">
                <div className="data__container container page-layout">
                    <div className="page-layout__left">
                        {isAudio && <AudioCards />}
                        {isVideo && <VideoCards />}
                        {isFotogalereya && <Fotogalereya />}
                    </div>
                    <div className="page-layout__right">
                        <TabSearchParams tabs={
                            [

                                {
                                    label: "Fotogalereya",
                                    value: "fotogalereya"
                                },
                                {
                                    label: "Audio",
                                    value: "audio"
                                },
                                {
                                    label: "Video",
                                    value: "video"
                                },
                            ]
                        } />
                    </div>
                </div>
            </section>
        </main>


    )
}

export default Mediateka;