"use client";
import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../api/api.service";
import { getImageUrl } from "../../../utils/getImageUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const SingleNews = () => {

    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('news123', id)
    const item = data?.data


    return <main class="main single-news">
        <section class="hero__with-title hero__with-title">
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <div class="hero__with-title-container container">
                <h1 class="hero__with-title-text">Yangiliklar</h1>
            </div>
        </section>
        <section class="data">
            <div class="data__container container page-layout">
                <div class="page-layout__left">
                    <div class="data__title">
                        {item?.title_uz}
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
                            <div class="statistics__text">{item?.number_views}</div>
                        </div>
                    </div>


                    <div class="data__banner">
                        <img class="bg" src={getImageUrl(item)} alt="banner" />
                    </div>

                    <div class="data__text">
                        {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                    </div>
                </div>
                <div class="page-layout__right">
                    <div class="page-layout__news sidebar-news">
                        <div class="sidebar-news__title sidebar-title">
                            Yangiliklar
                        </div>
                        <div class="news__left-items">
                            <div class="news__item ">
                                <div class="news-card">
                                    <div class="news-card__body">
                                        <div class="news-card__date">
                                            <img class="news-card__icon" src="/icons/calendar.svg"
                                                alt="calendar" />
                                            <div class=" news-card__time">
                                                08.03.24 23:23
                                            </div>
                                        </div>
                                        <div class="news-card__title">
                                            Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                            Xamroqulov
                                        </div>
                                        <div class="news-card__description">
                                            O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Rossiya
                                            Federatsiyasiga rasmiy tashrifning birinchi manzili –
                                            Qozon shahriga bordi.
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="news__item ">
                                <div class="news-card">
                                    <div class="news-card__body">
                                        <div class="news-card__date">
                                            <img class="news-card__icon" src="/icons/calendar.svg"
                                                alt="calendar" />
                                            <div class=" news-card__time">
                                                08.03.24 23:23
                                            </div>
                                        </div>
                                        <div class="news-card__title">
                                            Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                            Xamroqulov
                                        </div>
                                        <div class="news-card__description">
                                            O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Rossiya
                                            Federatsiyasiga rasmiy tashrifning birinchi manzili –
                                            Qozon shahriga bordi.
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="news__item ">
                                <div class="news-card">
                                    <div class="news-card__body">
                                        <div class="news-card__date">
                                            <img class="news-card__icon" src="/icons/calendar.svg"
                                                alt="calendar" />
                                            <div class=" news-card__time">
                                                08.03.24 23:23
                                            </div>
                                        </div>
                                        <div class="news-card__title">
                                            Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                            Xamroqulov
                                        </div>
                                        <div class="news-card__description">
                                            O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Rossiya
                                            Federatsiyasiga rasmiy tashrifning birinchi manzili –
                                            Qozon shahriga bordi.
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="news__item ">
                                <div class="news-card">
                                    <div class="news-card__body">
                                        <div class="news-card__date">
                                            <img class="news-card__icon" src="/icons/calendar.svg"
                                                alt="calendar" />
                                            <div class=" news-card__time">
                                                08.03.24 23:23
                                            </div>
                                        </div>
                                        <div class="news-card__title">
                                            Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                                            Xamroqulov
                                        </div>
                                        <div class="news-card__description">
                                            O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev Rossiya
                                            Federatsiyasiga rasmiy tashrifning birinchi manzili –
                                            Qozon shahriga bordi.
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
}

export default SingleNews