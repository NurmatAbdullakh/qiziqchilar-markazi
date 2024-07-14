"use client";
import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../../api/api.service";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import AudioPLayer from "../../../components/AudioPlayer/AudioPlayer";
import { getImageUrl } from "../../../../utils/getImageUrl";

const SingleAudio = () => {
    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('audiolars', id)
    const item = data?.data

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