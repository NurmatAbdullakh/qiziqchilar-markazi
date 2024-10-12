"use client"
import { useParams } from "next/navigation";
import { useGetOneByUrlQuery } from "../../../../api/api.service"
import { getItem } from "../../../../utils/getItem";
import { getImageUrl } from "../../../../utils/getImageUrl";
import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import BredCrumbs from "../../../components/BredCrumbs";


const SingleStandupper = () => {
    const { locale } = useParams()
    const { id } = useParams()
    const { data } = useGetOneByUrlQuery('soz-ustalaris', id)
    const item = getItem(data)


    const bredCrumbs = [
        {
            title: "So'z ustalaris",
            link: "/standuppers"
        },
        {
            title: item?.[`full_name_${locale}`],
            link: item?.[`full_name_${locale}`]
        }
    ]


    return (

        <main className="main single-stand-upper">
            <BredCrumbs items={bredCrumbs} />
            <section className="hero">
                <img className="hero__ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__container container">
                    <div className="hero__box">
                        <div className="hero__image">
                            <img className="bg" src={getImageUrl(item)} alt="stand-upper" />
                            <img className="overlay bg" src="/images/Overlay.png" alt="stand-upper" />
                        </div>
                        <div className="hero__info">
                            <div className="hero__title">{item?.[`full_name_${locale}`]}</div>
                            <div className="hero__subtitle">{item?.Kasbi}</div>
                            <div className="hero__line"></div>
                            <div className="hero__text">
                                {item?.[`description_${locale}`] && <BlocksRenderer content={item?.[`description_${locale}`]} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="career">
                <div className="career__container container">
                    <div className="career__title section-title">
                        <div className="section-title__title">Faoliyati</div>
                        <div className="section-title__divider"></div>
                    </div>
                    <div className="career__items">
                        {item?.faoliyati?.map((item, index) => (

                            <div key={index} className="career__item">
                                <div className="career__info">
                                    <div className="career__box">
                                        <div className="career__title">{item?.[`description_${locale}`]}</div>
                                    </div>
                                </div>
                                <div className="career__stepper stepper">
                                    <div className="stepper__line"></div>
                                    <div className="stepper__circle"></div>
                                </div>
                                <div className="career__year">{item?.Xodisa_yili?.slice(0, 4)}-yil</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="award">
                <div className="award__container container">
                    <div className="award__title section-title">
                        <div className="section-title__title">Yutuq va mukofotlari</div>
                        <div className="section-title__divider"></div>
                    </div>
                    <div className="award__items">
                        {
                            item?.achievments?.map((a) => {
                                return (

                                    <div key={a.id} className="award__item award-card">
                                        <div className="award-card__body">
                                            <div className="award-card__year">{a.Yutuq_yili.slice(0, 4)}-yil</div>
                                            <div className="award-card__title">{a?.[`title_${locale}`]}</div>
                                            <div className="award-card__subtitle">{a?.[`text_${locale}`]}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </main>

    )
}

export default SingleStandupper