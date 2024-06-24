const News = () => {
    return (
        <main class="main contacts">
            <section class="hero__with-title hero__with-title">
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img class="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div class="hero__with-title-container container">
                    <h1 class="hero__with-title-text">Bog‘lanish</h1>
                    <img class="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section class="info">
                <div class="info__container container">
                    <div class="contact__form form">
                        <div class="form__header">Qayta aloqa</div>

                        <form class="form__body">
                            <div class="form__name">
                                <label for="name" class="form__label">To‘liq ismingiz</label>
                                <input name="name" class="form__input" />
                            </div>
                            <div class="form__row">
                                <div class="form__phone">
                                    <label for="phone" class="form__label">Telefon raqamingiz</label>
                                    <input name="phone" class="form__input" />
                                </div>
                                <div class="form__school">
                                    <label for="school" class="form__label">Maxorat maktabi</label>
                                    <input name="school" class="form__input" />
                                </div>
                            </div>
                            <div class="form__message">
                                <label for="message" class="form__label">Maxorat maktabi</label>
                                <textarea name="message" class="form__textarea"></textarea>
                            </div>
                            <div class="form__row">
                                <div class="form__accept">
                                    <label class="form-checkbox__container">
                                        <a href="#">Foydalanish shartlari </a>
                                        <span>va</span> <a href="#"> maxfiylik siyosati</a>
                                        <span>bilan tanishib chiqdim</span>
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <button>Yuborish</button>
                            </div>
                        </form>
                    </div>
                    <div class="contact__links">
                        <div class="contact__address link-box">
                            <img class="bg" src="/images/map.jpg" alt="location" />
                            <img class="link-box__rectangle" src="/images/white-rectangle.png" alt="" />
                            <div class="link-box__row">
                                <img class="link-box__icon" src="/icons/location.svg" alt="location" />
                                <p class="link-box__text">Ташкент, ул. Амира Темура, 3</p>
                            </div>
                        </div>
                        <a href="mailto:info@askiyamarkazi.uz">
                            <div class="contact__address link-box">
                                <div class="link-box__row">
                                    <img class="link-box__icon" src="/icons/location.svg" alt="location" />
                                    <p class="link-box__text">info.@askiyamarkazi.uz</p>
                                </div>
                            </div>
                        </a>
                        <a href="tel:+998 71 200 70 07">
                            <div class="contact__address link-box">
                                <div class="link-box__row">
                                    <img class="link-box__icon" src="/icons/location.svg" alt="location" />
                                    <p class="link-box__text">+998 71 200 70 07</p>
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