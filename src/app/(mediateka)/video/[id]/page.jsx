"use client";
import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../../api/api.service";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";

const SingleVideo = () => {
    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('audiolars', id)
    const item = data?.data

    console.log(item);
    return (
        <main className="main single-video">
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
                        <div className="big-video data__banner">
                            <img className="big-video__image bg" src="/images/big-video.jpg" alt="video" />
                            <img className="big-video__overlay bg" src="/images/video-overlay.png" alt="video" />
                            <img className="big-video__play-icon" src="/icons/play-icon.svg" alt="video" />

                            <div className="big-video__info">
                                <div className="big-video__date">
                                    {item?.publishedAt?.slice(0, 10)}
                                </div>
                                <div className="big-video__title">
                                    Askiya – yashirin fikr sehri, hozirjavob xalqimizning noyob xazinasi
                                </div>
                            </div>
                        </div>

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

export default SingleVideo