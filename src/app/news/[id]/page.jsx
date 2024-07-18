"use client";
import { useParams } from "next/navigation";
import { useGetAllByUrlQuery, useGetOneByUrlQuery } from "../../../api/api.service";
import { getImageUrl } from "../../../utils/getImageUrl";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import BredCrumbs from "../../components/BredCrumbs";
import { getItems } from "../../../utils/getItems";
import Link from "next/link";
const SingleNews = () => {
    const { data: news } = useGetAllByUrlQuery('news123')

    const items = getItems(news) || []

    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('news123', id)
    const item = data?.data


    return <main class="main single-news">
        <BredCrumbs items={
            [{
                title: "Yangiliklar",
                link: "/news",
            }
                ,
            {
                title: item?.title_uz,
            }
            ]
        }
        />
        <section class="hero__with-title hero__with-title">
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
            <div class="hero__with-title-container container">
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
                            Tavsiya etamiz
                        </div>
                        <div class="news__left-items">
                            {
                                items?.map((item) => (
                                    <Link href={`/news/${item?.id}`} key={item.id}>
                                        <div class="news__item ">
                                            <div class="news-card">
                                                <div class="news-card__body">
                                                    <div class="news-card__date">
                                                        <img class="news-card__icon" src="/icons/calendar.svg"
                                                            alt="calendar" />
                                                        <div class=" news-card__time">
                                                            {item?.publishedAt?.slice(0, 10)}
                                                        </div>
                                                    </div>
                                                    <div class="news-card__title">
                                                        {item?.title_uz}
                                                    </div>
                                                    <div class="news-card__description">
                                                        {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}

export default SingleNews