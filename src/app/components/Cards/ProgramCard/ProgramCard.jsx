import { useParams } from "next/navigation";
import { Link } from "../../../../navigation";
import { getImageUrl } from "../../../../utils/getImageUrl";


const ProgramCard = ({ item, index }) => {
    const { locale } = useParams()

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
        <Link href={`/program/${item?.id}`} className="program__item program-card">
            <img
                src={getImageUrl(item)}
                className="program-card__image bg"
            />
            <img
                src={coverImage(index)}
                className="program-card__cover bg"
            />
            <div className="program-card__info">
                <div className="program-card__title">
                    {item?.[`nomi_${locale}`]}
                </div>
                <div className="program-card__date">
                    <div className="program-card__day">{item?.boshlanish_vaqti.slice(8)}</div>
                    <div className="program-card-date">
                        <div className="program-card__month">{item?.boshlanish_vaqti.slice(5, 7)}</div>
                        <div className="program-card__year">{item?.boshlanish_vaqti.slice(0, 4)}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProgramCard