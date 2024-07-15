import Link from "next/link"
import { useGetAllByUrlQuery } from "../../../../api/api.service"
import { getItems } from "../../../../utils/getItems"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { getImageUrl } from "../../../../utils/getImageUrl"

const News = ({ withoutTitle, withoutLink }) => {
    const { data: news } = useGetAllByUrlQuery('news123', {
        "filters[asosiy_sahifa][$eq]": true
    })

    const items = getItems(news) || []

    const leftItems = items?.slice(0, 4)
    const midBigItem = items?.[4]
    const midSmallItems = items?.slice(5, 7)
    const rightItems = items?.slice(7, 9)

    return (
        <section className="news">
            <div className="news__container container">
                {withoutTitle && <div className="news__title section-title ">
                    <div className="section-title__title">Yangiliklar</div>
                    <div className="section-title__divider"></div>
                    {withoutLink && <Link href="/news" className="section-title__all">
                        <div className="section-title__all-text">
                            Barcha yangiliklar
                        </div>
                        <img
                            className="section-title__all-icon"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            className="section-title__all-icon-small"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </Link>}
                </div>}
                <div className="news__layout">
                    <div className="news__left ">
                        <div className="news__left-items">
                            {leftItems?.map((item, index) => (
                                <Link href={`/news/${item?.id}`} key={item.id} className="news__item ">
                                    <div className="news-card">
                                        <div className="news-card__body">
                                            <div className="news-card__date">
                                                <img
                                                    className="news-card__icon"
                                                    src="/icons/calendar.svg"
                                                    alt="calendar"
                                                />
                                                <div className=" news-card__time">{item?.publishedAt?.slice(0, 10)}</div>
                                            </div>
                                            <div className="news-card__title">
                                                {item?.title_uz}
                                            </div>
                                            <div className="news-card__description">
                                                {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="news__mid">
                        <div className="news__mid-items">
                            <Link href={`/news/${midBigItem?.id}`} className="news__mid-item big-video">
                                <img
                                    className="big-video__image bg"
                                    src={getImageUrl(midBigItem)}
                                    alt="video"
                                />

                                <div className="big-video__info">
                                    <div className="big-video__date">{midBigItem?.publishedAt?.slice(0, 10)}</div>
                                    <div className="big-video__title">
                                        {midBigItem?.title_uz}
                                    </div>
                                </div>
                            </Link>
                            {
                                midSmallItems?.map((item, index) => (
                                    <Link key={item.id} href={`/news/${item?.id}`} className="news__mid-item big-video">
                                        <img
                                            className="big-video__image bg"
                                            src={getImageUrl(item)}
                                            alt="video"
                                        />
                                        <img
                                            className="big-video__overlay bg"
                                            src="/images/video-overlay.png"
                                            alt="video"
                                        />

                                        <div className="big-video__info">
                                            <div className="big-video__date">
                                                {item?.publishedAt?.slice(0, 10)}
                                            </div>
                                            <div className="big-video__title">
                                                {item?.title_uz}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="news__right ">
                        <div className="news__right-items">
                            {
                                rightItems?.map((item, index) => (
                                    <Link key={item.id} href={`/news/${item?.id}`} className="news__right-item">
                                        <div className="news__item news-card">
                                            <img
                                                className="news-card__texture"
                                                src="/icons/news-card-texture.svg"
                                                alt="texture"
                                            />
                                            <div className="news-card__image">
                                                <img
                                                    className="news-card__bg bg"
                                                    src={getImageUrl(item)}
                                                    alt="video"
                                                />
                                            </div>
                                            <div className="news-card__body">
                                                <div className="news-card__date">
                                                    <img
                                                        className="news-card__icon"
                                                        src="/icons/calendar.svg"
                                                        alt="calendar"
                                                    />
                                                    <div className=" news-card__time">{item?.publishedAt?.slice(0, 10)}</div>
                                                </div>
                                                <div className="news-card__title">
                                                    {item?.title_uz}
                                                </div>
                                                <div className="news-card__description">
                                                    {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
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
    )
}

export default News