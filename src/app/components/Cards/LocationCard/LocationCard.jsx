import { useParams } from "next/navigation"

const LocationCard = ({ item, isActive, onClick }) => {
    const { locale } = useParams()

    return (
        <div onClick={onClick} class={`location__item location ${isActive ? 'active' : ''} `}>
            <div className="location__title">
                <img
                    className="location__icon"
                    src="/icons/schoolIcon.svg"
                />
                <div className="location__text">{item?.maktab_nomi || item?.[`nomi_${locale}`] || item?.[`gastrol_nomi_${locale}`]}</div>
            </div>
            <div className="location__subtitle">
                {item?.[`manzil_${locale}`]}
            </div>
        </div>
    )
}

export default LocationCard