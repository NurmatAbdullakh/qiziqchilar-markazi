import Link from "next/link";
import { getImageUrl } from "../../../../utils/getImageUrl";


const ProgramCard = ({ item, index }) => {
    const coverImage = (index) => {
        if (!index) {
            '/images/covers/Image.png'
        }
        if (!(index % 4)) {
            return '/images/covers/Image.png';
        }
        if (!(index % 3)) {
            return '/images/covers/Image (1).png';
        }
        if (!(index % 2)) {
            return '/images/covers/Image (2).png';
        }
        if (!(index % 1)) {
            return '/images/covers/Image (3).png';
        }
    }

    return (
        <Link href={`/program/${item?.id}`} class="program__item program-card">
            <img
                src={getImageUrl(item)}
                class="program-card__image bg"
            />
            <img
                src={coverImage(index)}
                class="program-card__cover bg"
            />
            <div class="program-card__info">
                <div class="program-card__title">
                    {item?.nomi_uz}
                </div>
                <div class="program-card__date">
                    <div class="program-card__day">{item?.boshlanish_vaqti.slice(8)}</div>
                    <div class="program-card-date">
                        <div class="program-card__month">{item?.boshlanish_vaqti.slice(5, 7)}</div>
                        <div class="program-card__year">{item?.boshlanish_vaqti.slice(0, 4)}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProgramCard