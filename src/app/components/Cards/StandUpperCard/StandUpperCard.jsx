import Link from "next/link"
import { getImageUrl } from "../../../../utils/getImageUrl"

const StandUpperCard = ({ item }) => {

    return (
        <div class="jockers__item jocker-card">
            <Link href={`/standuppers/${item?.id}`}>
                <img
                    class="jocker-card__image bg"
                    src={getImageUrl(item) || "/images/jockers/Image (1).jpg"}
                    alt="jocker-card"
                />
                <div class="jocker-card__info">
                    <div class="jocker-card__title">{item?.full_name_uz}</div>
                    <div class="jocker-card__subtitle">{item?.Kasbi}</div>
                </div>
                <img
                    class="jocker-card__texture"
                    src="/icons/jocker-card-texture.svg"
                    alt="texture"
                />
            </Link>
        </div>
    )
}

export default StandUpperCard