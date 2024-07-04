"use client";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Gostrols from "./components/Home/Gostrols/Gostrols";
import StandUppers from "./components/Home/StandUppers/StandUppers";
import Programs from "./components/Home/Programs/Programs";
import Audios from "./components/Home/Audios/Audios";
import Gallery from "./components/Home/Gallery/Gallery";
import Retro from "./components/Home/Retro/Retro";
import Locations from "./components/Home/Locations/Locations";

export default function Home() {

  return (
    <main class="main">
      <section class="hero">
        <img class="hero__bg bg" src="/images/hero.jpg" alt="banner" />
        <img
          class="hero__overlay bg"
          src="/images/Overlay.png"
          alt=""
        />
        <div class="hero__container container">
          <div class="hero__box">
            <div class="hero__adress">Samarqand Madaniyat saroyi</div>
            <div class="hero__title">G’ayrat Axmedov</div>
            <div class="hero__subtitle">yakkaxon konserti</div>
            <button class="hero__button">Bog‘lanish</button>
            <HeroSlider />
          </div>
        </div>
      </section>

      <StandUppers />
      <Programs />
      <Gostrols />
      <Locations />
      <Retro />
      <Gallery />
      <Audios />
      <section class="news">
        <div class="news__container container">
          <div class="news__title section-title ">
            <div class="section-title__title">Yangiliklar</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a class="section-title__all-text" href="./pages/news/news.html">
                Barcha yangiliklar
              </a>
              <img
                class="section-title__all-icon"
                src="/icons/arrowRight.svg"
                alt="arrow-right"
              />
              <img
                class="section-title__all-icon-small"
                src="/icons/smallArrowRight.svg"
                alt="arrow-right"
              />
            </div>
          </div>
          <div class="news__layout">
            <div class="news__left ">
              <div class="news__left-items">
                <div class="news__item ">
                  <div class="news-card">
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news__item ">
                  <div class="news-card">
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news__item ">
                  <div class="news-card">
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news__item ">
                  <div class="news-card">
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="news__mid">
              <div class="news__mid-items">
                <div class="news__mid-item big-video">
                  <img
                    class="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />

                  <div class="big-video__info">
                    <div class="big-video__date">08.03.24 20:03</div>
                    <div class="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
                <div class="news__mid-item big-video">
                  <img
                    class="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />
                  <img
                    class="big-video__overlay bg"
                    src="/images/video-overlay.png"
                    alt="video"
                  />

                  <div class="big-video__info">
                    <div class="big-video__date">08.03.24 20:03</div>
                    <div class="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
                <div class="news__mid-item big-video">
                  <img
                    class="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />
                  <img
                    class="big-video__overlay bg"
                    src="/images/video-overlay.png"
                    alt="video"
                  />

                  <div class="big-video__info">
                    <div class="big-video__date">08.03.24 20:03</div>
                    <div class="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="news__right ">
              <div class="news__right-items">
                <div class="news__right-item">
                  <div class="news__item news-card">
                    <img
                      class="news-card__texture"
                      src="/icons/news-card-texture.svg"
                      alt="texture"
                    />
                    <div class="news-card__image">
                      <img
                        class="news-card__bg bg"
                        src="/images/video.jpg"
                        alt="video"
                      />
                    </div>
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="news__right-item">
                  <div class="news__item news-card">
                    <img
                      class="news-card__texture"
                      src="/icons/news-card-texture.svg"
                      alt="texture"
                    />
                    <div class="news-card__image">
                      <img
                        class="news-card__bg bg"
                        src="/images/video.jpg"
                        alt="video"
                      />
                    </div>
                    <div class="news-card__body">
                      <div class="news-card__date">
                        <img
                          class="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div class=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div class="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div class="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partners">
        <div class="partners__container container">
          <div class="partners__title">
            <div class="section-title__title">Hamkorlar</div>
          </div>
        </div>
        <div class="partners__content">
          <div class="partners__items">
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
          </div>
          <div class="partners__items">
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div class="partners__item">
              <div class="partners__logo">
                <img
                  class="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
