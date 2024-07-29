import { Link } from "../../../../navigation"
import { getImageUrl } from "../../../../utils/getImageUrl"

const StandUpperCard = ({ item }) => {

    return (
        <div className="jockers__item jocker-card">
            <Link href={`/standuppers/${item?.id}`}>
                <img
                    className="jocker-card__image bg"
                    src={getImageUrl(item) || "/images/jockers/Image (1).jpg"}
                    alt="jocker-card"
                />
                <div className="jocker-card__info">
                    <div className="jocker-card__title">{item?.full_name_uz}</div>
                    <div className="jocker-card__subtitle">{item?.Kasbi}</div>
                </div>
                <img
                    className="jocker-card__texture"
                    src="/icons/jocker-card-texture.svg"
                    alt="texture"
                />
            </Link>
        </div>
    )
}

export default StandUpperCard