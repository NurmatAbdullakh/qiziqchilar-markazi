const LocationCard = ({ item, isActive }) => {

    return (
        <div class={`location__item location ${isActive ? 'active' : ''} `}>
            <div className="location__title">
                <img
                    className="location__icon"
                    src="/icons/schoolIcon.svg"
                />
                <div className="location__text">{item?.maktab_nomi}</div>
            </div>
            <div className="location__subtitle">
                Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi
                11uy
            </div>
        </div>
    )
}

export default LocationCard