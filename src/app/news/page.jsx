"use client";
import NewsItems from "../components/Home/News/News";

const News = () => {
    return (
        <main className="main stand-upper">
            <section className="hero__with-title hero__with-title">
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <img className="hero__with-title-ellips" src="/images/ellips.svg" alt="ellips" />
                <div className="hero__with-title-container container">
                    <h1 className="hero__with-title-text">Yangiliklar</h1>
                    <img className="hero__with-title-img" src="/images/titles/markaz.svg" alt="markaz" />
                </div>
            </section>
            <NewsItems withoutTitle withoutLink />
        </main>


    )
}

export default News;