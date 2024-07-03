import { useGetAllByUrlQuery } from "../../../../api/api.service";
import GostrolCard from "../../Cards/GostrolCards/GostrolCard";
import { getItems } from "../.././../../utils/getItems"


const Gostrols = () => {
    const { data: gostrolls } = useGetAllByUrlQuery('gastrollars')


    const items = getItems(gostrolls) || []

    return (
        <section class="gostrol">
            <div class="gostrol__container container">
                <div class="gostrol__title section-title">
                    <div class="section-title__title">Gastrollar</div>
                    <div class="section-title__divider"></div>
                    <div class="section-title__all">
                        <a
                            class="section-title__all-text"
                            href="./pages/gostrolls/gostrolls.html"
                        >
                            Barcha gastrollar
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

                <div class="gostrol__items">
                    {items?.map((item) => {
                        return <GostrolCard item={item} />
                    })}
                </div>
            </div>
        </section>

    )

}

export default Gostrols