import StanduppersCards from "./_component/StanduppersCards";

const StandUppers = () => {
    return (
        <main className="main stand-upper">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">SO'Z USTALARI</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <section className="data">
                <div className="data__container container page-layout">
                    <div columns={[1, 2, 4]} spacing='20px' className="page-layout__left">
                        <StanduppersCards />
                    </div>
                    <div className="page-layout__right">
                        {/* <div className="page-layout__types filter">
                            <div className="filter__title">Filtr</div>
                            <div className="filter__subtitle">Askiyachilar</div>
                            <ul className="filter__list">
                                <li>
                                    <label className="filter__container">Barchasi
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">Vafot etganlar
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">Yangi askiyachilar
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                            <div className="filter__subtitle">Askiyachilar</div>
                            <ul className="filter__list">
                                <li>
                                    <label className="filter__container">Barchasi
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">Qiziqchi
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">Aktyor
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">Baxshi
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="filter__container">So‘z ustasi
                                        <input type="checkbox" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
        </main >


    )
}

export default StandUppers;