const GostrolCard = ({ item }) => {

    return (
        <div class="gostrol__item gostrol-card">
            <div class="gostrol-card__period">
                <img
                    class="gostrol-card__texture"
                    src="/icons/programTexture.svg"
                    alt="programTexture"
                />
                <div class="gostrol-card__date">
                    <div class="gostrol-card__day">{item.start_date.slice(8, 10)}</div>
                    <div class="gostrol-card__month">{item.start_date.slice(5, 7)}</div>
                </div>
                <div class="gostrol-card__line"></div>
                <div class="gostrol-card__date">
                    <div class="gostrol-card__day">{item.finish_date.slice(8, 10)}</div>
                    <div class="gostrol-card__month">{item.finish_date.slice(5, 7)}</div>
                </div>
            </div>

            <div class="gostrol-card__title">{item.gastrol_nomi_uz}</div>
            <div class="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div class="gostrol-card__address-text">
                    {item.Joylashuv_manzili}
                </div>
            </div>
        </div>
    )
}

export default GostrolCard