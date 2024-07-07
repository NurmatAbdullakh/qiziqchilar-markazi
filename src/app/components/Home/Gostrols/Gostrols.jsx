import { useGetAllByUrlQuery } from "../../../../api/api.service";
import GostrolCard from "../../Cards/GostrolCards/GostrolCard";
import { getItems } from "../.././../../utils/getItems"
import Link from "next/link";


const Gostrols = () => {
    const { data: gostrolls } = useGetAllByUrlQuery('gastrollars')


    const items = getItems(gostrolls) || []

    return (
        <section className="gostrol">
            <div className="gostrol__container container">
                <div className="gostrol__title section-title">
                    <div className="section-title__title">Gastrollar</div>
                    <div className="section-title__divider"></div>
                    <Link href={"/events?type=gastrollar"} className="section-title__all">
                        <div
                            className="section-title__all-text"
                            href="./pages/gostrolls/gostrolls.html"
                        >
                            Barcha gastrollar
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
                    </Link>
                </div>

                <div className="gostrol__items">
                    {items?.map((item) => {
                        return <GostrolCard item={item} />
                    })}
                </div>
            </div>
        </section>

    )

}

export default Gostrols