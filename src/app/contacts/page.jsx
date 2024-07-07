const News = () => {
    return (
        <main className="main contacts">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">Bog‘lanish</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section className="info">
                <div className="info__container container">
                    <div className="contact__form form">
                        <div className="form__header">Qayta aloqa</div>

                        <form className="form__body">
                            <div className="form__name">
                                <label for="name" className="form__label">To‘liq ismingiz</label>
                                <input name="name" className="form__input" />
                            </div>
                            <div className="form__row">
                                <div className="form__phone">
                                    <label for="phone" className="form__label">Telefon raqamingiz</label>
                                    <input name="phone" className="form__input" />
                                </div>
                                <div className="form__school">
                                    <label for="school" className="form__label">Maxorat maktabi</label>
                                    <input name="school" className="form__input" />
                                </div>
                            </div>
                            <div className="form__message">
                                <label for="message" className="form__label">Maxorat maktabi</label>
                                <textarea name="message" className="form__textarea"></textarea>
                            </div>
                            <div className="form__row">
                                <div className="form__accept">
                                    <label className="form-checkbox__container">
                                        <a href="#">Foydalanish shartlari </a>
                                        <span>va</span> <a href="#"> maxfiylik siyosati</a>
                                        <span>bilan tanishib chiqdim</span>
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <button>Yuborish</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact__links">
                        <div className="contact__address link-box">
                            <img className="bg" src="/images/map.jpg" alt="location" />
                            <img className="link-box__rectangle" src="/images/white-rectangle.png" alt="" />
                            <div className="link-box__row">
                                <img className="link-box__icon" src="/icons/location.svg" alt="location" />
                                <p className="link-box__text">Ташкент, ул. Амира Темура, 3</p>
                            </div>
                        </div>
                        <a href="mailto:info@askiyamarkazi.uz">
                            <div className="contact__address link-box">
                                <div className="link-box__row">
                                    <img className="link-box__icon" src="/icons/location.svg" alt="location" />
                                    <p className="link-box__text">info.@askiyamarkazi.uz</p>
                                </div>
                            </div>
                        </a>
                        <a href="tel:+998 71 200 70 07">
                            <div className="contact__address link-box">
                                <div className="link-box__row">
                                    <img className="link-box__icon" src="/icons/location.svg" alt="location" />
                                    <p className="link-box__text">+998 71 200 70 07</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default News;