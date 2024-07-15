"use client";

import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../../api/api.service";
import { getItem } from "../../../../utils/getItem";
import { getImageUrl } from "../../../../utils/getImageUrl";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import BredCrumbs from "../../../components/BredCrumbs";

const SingleTour = () => {
    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('gastrollars', id)
    const item = getItem(data)

    return (
        <main className="main single-gostrol">
            <BredCrumbs items={[
                { title: "Gastroll va dasturlar", link: "/events?type=gastrollar" },
                { title: item?.gastrol_nomi_uz, link: item?.gastrol_nomi_uz }
            ]} />
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
                        <div className="data__banner">
                            <img className="bg" src={getImageUrl(item)} alt="banner" />
                        </div>
                        <div className="data__row row">
                            <div className="row__right">
                                <div className="row__title data__title">{item?.gastrol_nomi_uz}</div>
                                <div className="row__date">
                                    <img className="row__icon" src="/icons/data-calendar.svg" alt="" />
                                    <div className="row__time">{item?.publishedAt?.slice(0, 10)}</div>
                                </div>

                            </div>
                            <div className="row__left period">
                                <div className="period__period">
                                    <div className="period__date">
                                        <div className="period__day">{item?.start_date?.slice(8, 10)}</div>
                                        <div className="period__month">{item?.start_date?.slice(5, 7)}</div>
                                    </div>
                                    <div className="period__line"></div>
                                    <div className="period__date">
                                        <div className="period__day">{item?.finish_date?.slice(8, 10)}</div>
                                        <div className="period__month">{item?.finish_date?.slice(5, 7)}</div>
                                    </div>
                                </div>
                                <div className="period__location">
                                    <img className="period__location-icon" src="/icons/data-location.svg"
                                        alt="location" />
                                    <div className="period__location-text">{item?.Joylashuv_manzili_uz}</div>
                                </div>
                            </div>

                        </div>
                        <div className="data__text">
                            {item?.text_uz && <BlocksRenderer content={item?.text_uz} />}
                        </div>
                    </div>
                    <div className="page-layout__right">
                        <div className="page-layout__adresses addresses-menu">
                            <div className="addresses-menu__title sidebar-title">
                                Manzillar
                            </div>
                            <ul className="addresses-menu__list">
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Abdulla Kaxxor madaniyat uyi</div>
                                </li>
                                <li className="addresses-menu__item active">
                                    <img className="addresses-menu__icon" src="/icons/skyssraper.svg" />
                                    <div className="addresses-menu__label">Istiqlol san’at saroyi</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <sectio className="modal">
                <div className="modal__content ">
                    <div className="modal__body location-modal">
                        <div className="location-modal__header">
                            <div className="location-modal__title">Abdulla Qaxxor madaniyat uyi</div>
                            <img className="location-modal__close-btn" src="/icons/close.svg" />
                        </div>
                        <div className="location-modal__subheader">
                            16 May - 23:23
                        </div>
                        <div className="location-modal__map">
                            <img className="bg" src="/images/map.jpg" alt="map" />
                            <img className="location-modal__rectangle" src="/images/white-rectangle.png" alt="" />
                            <div className="location-modal__row">
                                <img className="location-modal__icon" src="/icons/location.svg" alt="location" />
                                <p className="location-modal__text">O'zbekiston, Toshkent, Uch-tepa tumani, ko'chasi FARHOD,
                                    21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </sectio> */}
        </main>
    )
}

export default SingleTour