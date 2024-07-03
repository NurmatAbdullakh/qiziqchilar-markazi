import { useGetAllByUrlQuery } from "../../../../api/api.service"
import StandUpperCard from "../../Cards/StandUpperCard/StandUpperCard"
import { getItems } from "../.././../../utils/getItems"


const StandUppers = () => {
    const { data: standUppers } = useGetAllByUrlQuery('soz-ustalaris')

    const items = getItems(standUppers) || []

    return (
        <section class="jockers main">
            <div class="jockers__container container">
                <div class="jockers__title section-title">
                    <div class="section-title__title">So`z ustalari</div>
                    <div class="section-title__divider"></div>
                    <div class="section-title__all">
                        <a
                            class="section-title__all-text"
                            href="./pages/stand-upper/stand-upper.html"
                        >
                            Barcha so`z ustalari
                        </a>
                        <img
                            class="section-title__all-icon"
                            src="/icons/arrowRight.svg"
                            alt="arrow-right"
                        />
                        <img
                            class="section-title__all-icon-small"
                            src="/icons/smallArrowRight.svg"
                            alt="arrow-right"
                        />
                    </div>
                </div>
                <div class="jockers__items">
                    {
                        items?.map((item) => {
                            return <StandUpperCard item={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default StandUppers