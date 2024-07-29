import { useGetAllByUrlQuery } from "../../../../api/api.service"
import StandUpperCard from "../../Cards/StandUpperCard/StandUpperCard"
import { getItems } from "../.././../../utils/getItems"
import { Link } from "../../../../navigation"


const StandUppers = () => {
    const { data: standUppers } = useGetAllByUrlQuery('soz-ustalaris', {
        "filters[asosiy_sahifa][$eq]": true
    })

    const items = getItems(standUppers) || []
    return (
        <section className="jockers main">
            <div className="jockers__container container">
                <div className="jockers__title section-title">
                    <div className="section-title__title">So`z ustalari</div>
                    <div className="section-title__divider"></div>
                    <Link href={"/standuppers"} className="section-title__all">
                        <div
                            className="section-title__all-text"
                        >
                            Barcha so`z ustalari
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
                <div className="jockers__items">
                    {
                        items?.map((item) => {
                            return <StandUpperCard key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default StandUppers