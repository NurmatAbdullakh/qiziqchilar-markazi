import { getImageUrl } from "../../../../utils/getImageUrl";

const ProgramCard = ({ item }) => {

    return (
        <div class="program__item program-card">
            <img
                src={getImageUrl(item)}
                class="program-card__image bg"
            />
            <img
                src="/images/covers/Image (1).png"
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
        </div>
    )
}
export default ProgramCard