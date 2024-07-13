const LocationCard = ({ item, isActive, onClick }) => {

    return (
        <div onClick={onClick} class={`location__item location ${isActive ? 'active' : ''} `}>
            <div className="location__title">
                <img
                    className="location__icon"
                    src="/icons/schoolIcon.svg"
                />
                <div className="location__text">{item?.maktab_nomi}</div>
            </div>
            <div className="location__subtitle">
                {item?.manzil_uz}
            </div>
        </div>
    )
}

export default LocationCard