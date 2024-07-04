const LocationCard = ({ item, isActive }) => {

    return (
        <div class={`location__item location ${isActive ? 'active' : ''} `}>
            <div class="location__title">
                <img
                    class="location__icon"
                    src="/icons/schoolIcon.svg"
                />
                <div class="location__text">{item?.maktab_nomi}</div>
            </div>
            <div class="location__subtitle">
                Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi
                11uy
            </div>
        </div>
    )
}

export default LocationCard