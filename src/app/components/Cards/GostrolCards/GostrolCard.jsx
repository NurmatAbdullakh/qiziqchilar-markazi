import { useParams } from "next/navigation"
import { Link } from "../../../../navigation"

const GostrolCard = ({ item }) => {
    const { locale } = useParams()

    return (
        <Link href={`/tour/${item.id}`} className="gostrol__item gostrol-card">
            <div className="gostrol-card__period">
                <img
                    className="gostrol-card__texture"
                    src="/icons/programTexture.svg"
                    alt="programTexture"
                />
                <div className="gostrol-card__date">
                    <div className="gostrol-card__day">{item.start_date.slice(8, 10)}</div>
                    <div className="gostrol-card__month">{item.start_date.slice(5, 7)}</div>
                </div>
                <div className="gostrol-card__line"></div>
                <div className="gostrol-card__date">
                    <div className="gostrol-card__day">{item.finish_date.slice(8, 10)}</div>
                    <div className="gostrol-card__month">{item.finish_date.slice(5, 7)}</div>
                </div>
            </div>

            <div className="gostrol-card__title">{item?.[`gastrol_nomi_${locale}`]}</div>
            <div className="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div className="gostrol-card__address-text">
                    {item.Joylashuv_manzili}
                </div>
            </div>
        </Link>
    )
}

export default GostrolCard