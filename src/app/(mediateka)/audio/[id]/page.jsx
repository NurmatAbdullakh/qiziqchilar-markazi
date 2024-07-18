"use client";
import { useParams } from "next/navigation";
import { useGetAllByUrlQuery, useGetOneByUrlQuery } from "../../../../api/api.service";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import AudioPLayer from "../../../components/AudioPlayer/AudioPlayer";
import { getImageUrl } from "../../../../utils/getImageUrl";
import BredCrumbs from "../../../components/BredCrumbs";
import { getAutomaticTypeDirectiveNames } from "typescript";
import AudioCard from "../../../components/Cards/AudioCard/AudioCard";
import { getItems } from "../../../../utils/getItems";
import { Text } from "@chakra-ui/react";

const SingleAudio = () => {
    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('audiolars', id)
    const item = data?.data

    const { data: audios } = useGetAllByUrlQuery('audiolars')

    const items = getItems(audios)

    return (
        <main className="main single-audio">
            <BredCrumbs items={[
                {
                    title: "Audio",
                    link: "/mediateka?type=audio"
                },
                {
                    title: item?.title_uz,
                    link: item?.title_uz
                }
            ]} />
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
                            {item?.title_uz}
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
                                <div className="statistics__text">{item?.number_views}</div>
                            </div>
                        </div>
                        {item?.audio_file?.url &&
                            <AudioPLayer
                                imageUrl={getImageUrl(item)}
                                title={item?.title_uz}
                                src={"https://admin.askiyachilar.uz" + item?.audio_file?.url}
                            />}
                        <div className="data__text">
                            {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                        </div>
                    </div>
                    <div className="page-layout__right">
                        <div className="page-layout__right-items">
                            <Text fontSize={"28px"} fontWeight={600} mb={6}>Tavsiya etamiz</Text>
                            {
                                items?.map((item) => {
                                    return (
                                        <AudioCard
                                            key={item.id}
                                            item={item}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SingleAudio