"use client";
import { Text } from "@chakra-ui/react";

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
          </div>
        </div>
      </section>

      <section class="jockers">
        <div class="jockers__container container">
          <div class="jockers__title section-title">
            <div class="section-title__title">So`z ustalari</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a
                class="section-title__all-text"
                href="./pages/stand-upper/stand-upper.html"
              >
                Barcha so`z ustalari
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

          <div class="jockers__items">
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image (2).jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image (3).jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image (4).jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image.jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
            <div class="jockers__item jocker-card">
              <a href="./pages/single-stand-upper/single-stand-upper.html">
                <img
                  class="jocker-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="jocker-card"
                />
                <div class="jocker-card__info">
                  <div class="jocker-card__title">G’ayrat Axmedov</div>
                  <div class="jocker-card__subtitle">yakkaxon konserti</div>
                </div>
                <img
                  class="jocker-card__texture"
                  src="/icons/jocker-card-texture.svg"
                  alt="texture"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="program">
        <div class="program__container container">
          <div class="program__title section-title">
            <div class="section-title__title">Dasturlar</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a
                class="section-title__all-text"
                href="./pages/program/program.html"
              >
                Barcha dasturlar
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
          <div class="program__items">
            <div class="program__item program-card">
              <img
                src="/images/jockers/Image (1).jpg"
                class="program-card__image bg"
              />
              <img
                src="/images/covers/Image (1).png"
                class="program-card__cover bg"
              />
              <div class="program-card__info">
                <div class="program-card__title">
                  Marg’ilon darvishona askiya bazmi
                </div>
                <div class="program-card__date">
                  <div class="program-card__day">20</div>
                  <div class="program-card-date">
                    <div class="program-card__month">Aprel</div>
                    <div class="program-card__year">2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="program__item program-card">
              <img
                src="/images/jockers/Image (2).jpg"
                class="program-card__image bg"
              />
              <img
                src="/images/covers/Image (2).png"
                class="program-card__cover bg"
              />
              <div class="program-card__info">
                <div class="program-card__title">
                  Marg’ilon darvishona askiya bazmi
                </div>
                <div class="program-card__date">
                  <div class="program-card__day">20</div>
                  <div class="program-card-date">
                    <div class="program-card__month">Aprel</div>
                    <div class="program-card__year">2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="program__item program-card">
              <img
                src="/images/jockers/Image (3).jpg"
                class="program-card__image bg"
              />
              <img
                src="/images/covers/Image (3).png"
                class="program-card__cover bg"
              />
              <div class="program-card__info">
                <div class="program-card__title">
                  Marg’ilon darvishona askiya bazmi
                </div>
                <div class="program-card__date">
                  <div class="program-card__day">20</div>
                  <div class="program-card-date">
                    <div class="program-card__month">Aprel</div>
                    <div class="program-card__year">2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="program__item program-card">
              <img
                src="/images/jockers/Image.jpg"
                class="program-card__image bg"
              />
              <img
                src="/images/covers/Image.png"
                class="program-card__cover bg"
              />
              <div class="program-card__info">
                <div class="program-card__title">
                  Marg’ilon darvishona askiya bazmi
                </div>
                <div class="program-card__date">
                  <div class="program-card__day">20</div>
                  <div class="program-card-date">
                    <div class="program-card__month">Aprel</div>
                    <div class="program-card__year">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gostrol">
        <div class="gostrol__container container">
          <div class="gostrol__title section-title">
            <div class="section-title__title">Gastrollar</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a
                class="section-title__all-text"
                href="./pages/gostrolls/gostrolls.html"
              >
                Barcha gastrollar
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

          <div class="gostrol__items">
            <div class="gostrol__item gostrol-card">
              <div class="gostrol-card__period">
                <img
                  class="gostrol-card__texture"
                  src="assets/icons/programTexture.svg"
                  alt="programTexture"
                />
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
                <div class="gostrol-card__line"></div>
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
              </div>

              <div class="gostrol-card__title">AShtarxoniylar guruxi</div>
              <div class="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div class="gostrol-card__address-text">
                  Turkiston san’at saroyi
                </div>
              </div>
            </div>
            <div class="gostrol__item gostrol-card">
              <div class="gostrol-card__period">
                <img
                  class="gostrol-card__texture"
                  src="assets/icons/programTexture.svg"
                  alt="programTexture"
                />
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
                <div class="gostrol-card__line"></div>
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
              </div>

              <div class="gostrol-card__title">AShtarxoniylar guruxi</div>
              <div class="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div class="gostrol-card__address-text">
                  Turkiston san’at saroyi
                </div>
              </div>
            </div>
            <div class="gostrol__item gostrol-card">
              <div class="gostrol-card__period">
                <img
                  class="gostrol-card__texture"
                  src="assets/icons/programTexture.svg"
                  alt="programTexture"
                />
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
                <div class="gostrol-card__line"></div>
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
              </div>

              <div class="gostrol-card__title">AShtarxoniylar guruxi</div>
              <div class="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div class="gostrol-card__address-text">
                  Turkiston san’at saroyi
                </div>
              </div>
            </div>
            <div class="gostrol__item gostrol-card">
              <div class="gostrol-card__period">
                <img
                  class="gostrol-card__texture"
                  src="assets/icons/programTexture.svg"
                  alt="programTexture"
                />
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
                <div class="gostrol-card__line"></div>
                <div class="gostrol-card__date">
                  <div class="gostrol-card__day">20</div>
                  <div class="gostrol-card__month">Aprel</div>
                </div>
              </div>

              <div class="gostrol-card__title">AShtarxoniylar guruxi</div>
              <div class="gostrol-card__address">
                <img src="/icons/location.svg" alt="location" />
                <div class="gostrol-card__address-text">
                  Turkiston san’at saroyi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="locations">
        <div class="locations__container container">
          <div class="locations__title section-title">
            <div class="section-title__title">Manzillar</div>
            <div class="section-title__divider"></div>
          </div>

          <div class="locations__map">
            <img
              class="locations__map-image bg"
              src="/images/map.jpg"
            />

            <div class="locations__tabs tabs">
              <div class="tabs__tab-list">
                <div class="tabs__tab-item active">
                  <div class="tabs__tab-title">Maxorat maktablari</div>
                </div>
                <div class="tabs__tab-item">
                  <div class="tabs__tab-title">Tadbirlar</div>
                </div>
                <div class="tabs__tab-item">
                  <div class="tabs__tab-title">Gostrollar</div>
                </div>
              </div>
              <div class="tabs__tab-panel">
                <div class="locations__items">
                  <div class="locations__item location active">
                    <div class="location__title">
                      <img
                        class="location__icon"
                        src="/icons/schoolIcon.svg"
                      />
                      <div class="location__text">Farg’ona Maxorat maktabi</div>
                    </div>
                    <div class="location__subtitle">
                      Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi
                      11uy
                    </div>
                  </div>
                  <div class="locations__item location">
                    <div class="location__title">
                      <img
                        class="location__icon"
                        src="/icons/schoolIcon.svg"
                      />
                      <div class="location__text">Farg’ona Maxorat maktabi</div>
                    </div>
                    <div class="location__subtitle">
                      Farg’ona viloyati, Farg’ona shaxar, Yuksalish ko’chasi
                      11uy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="retro">
        <div class="retro__container container">
          <div class="retro__title section-title">
            <div class="section-title__title">Retro Askiyalar</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a
                class="section-title__all-text"
                href="./pages/retro/retro.html"
              >
                Barcha askiyalar
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
          <div class="retro__layout">
            <div class="retro__left big-video">
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
              <img
                class="big-video__play-icon"
                src="/icons/play-icon.svg"
                alt="video"
              />

              <div class="big-video__info">
                <div class="big-video__date">08.03.24 20:03</div>
                <div class="big-video__title">
                  Askiya – yashirin fikr sehri, hozirjavob xalqimizning noyob
                  xazinasi
                </div>
              </div>
            </div>
            <div class="retro__right">
              <div class="retro__items">
                <div class="retro__item video-card">
                  <div class="video-card__image">
                    <img
                      class="video-card__bg bg"
                      src="/images/video.jpg"
                      alt="video"
                    />
                    <img
                      class="video-card__play-icon"
                      src="/icons/play-icon.svg"
                      alt="video"
                    />
                  </div>
                  <div class="video-card__body">
                    <div class="video-card__date">
                      <img
                        class="video-card__icon"
                        src="/icons/calendar.svg"
                        alt="calendar"
                      />
                      <div class=" video-card__time">08.03.24 23:23</div>
                    </div>
                    <div class="video-card__title">
                      Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                      Xamroqulov
                    </div>
                  </div>
                </div>
                <div class="retro__item video-card">
                  <div class="video-card__image">
                    <img
                      class="video-card__bg bg"
                      src="/images/video.jpg"
                      alt="video"
                    />
                    <img
                      class="video-card__play-icon"
                      src="/icons/play-icon.svg"
                      alt="video"
                    />
                  </div>
                  <div class="video-card__body">
                    <div class="video-card__date">
                      <img
                        class="video-card__icon"
                        src="/icons/calendar.svg"
                        alt="calendar"
                      />
                      <div class=" video-card__time">08.03.24 23:23</div>
                    </div>
                    <div class="video-card__title">
                      Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                      Xamroqulov
                    </div>
                  </div>
                </div>
                <div class="retro__item video-card">
                  <div class="video-card__image">
                    <img
                      class="video-card__bg bg"
                      src="/images/video.jpg"
                      alt="video"
                    />
                    <img
                      class="video-card__play-icon"
                      src="/icons/play-icon.svg"
                      alt="video"
                    />
                  </div>
                  <div class="video-card__body">
                    <div class="video-card__date">
                      <img
                        class="video-card__icon"
                        src="/icons/calendar.svg"
                        alt="calendar"
                      />
                      <div class=" video-card__time">08.03.24 23:23</div>
                    </div>
                    <div class="video-card__title">
                      Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                      Xamroqulov
                    </div>
                  </div>
                </div>
              </div>
              <button class="retro__button outline-button">
                Barcha videolar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="gallery">
        <div class="gallery__container container">
          <div class="gallery__title section-title ">
            <div class="section-title__title white">Fotogalereya</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a
                class="section-title__all-text white"
                href="./pages/mediateka/mediateka.html"
              >
                Barcha suratlar
              </a>
              <img
                class="section-title__all-icon white"
                src="/icons/arrowRight.svg"
                alt="arrow-right"
              />
              <img
                class="section-title__all-icon-small white"
                src="/icons/smallArrowRight.svg"
                alt="arrow-right"
              />
            </div>
          </div>
          <div class="gallery__items">
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 1.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery.jpg"
                alt="gallery"
              />
              <div class="gallery__overlay">+9ta</div>
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 6.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 2.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 3.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 5.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 7.jpg"
                alt="gallery"
              />
            </div>
            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 4.jpg"
                alt="gallery"
              />
            </div>

            <div class="gallery__item">
              <img
                class="gallery__image bg"
                src="/images/gallery/gallery 8.jpg"
                alt="gallery"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="audio">
        <div class="audio__container container">
          <div class="gallery__title section-title ">
            <div class="section-title__title white">Audio</div>
            <div class="section-title__divider"></div>
            <div class="section-title__all">
              <a class="section-title__all-text white" href="#">
                Barcha audiolar
              </a>
              <img
                class="section-title__all-icon white"
                src="/icons/arrowRight.svg"
                alt="arrow-right"
              />
              <img
                class="section-title__all-icon-small white"
                src="/icons/smallArrowRight.svg"
                alt="arrow-right"
              />
            </div>
          </div>
          <div class="audio__items">
            <div class="audio__item audio-card">
              <img
                class="audio-card__texture"
                src="/icons/audio-texture.svg"
              />
              <div class="audio-card__image">
                <img
                  class="audio-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="audio"
                />
                <img
                  class="audio-card__overlay bg"
                  src="/images/Overlay.png"
                  alt=""
                />
                <div class="audio-card__player">
                  <div class="audio-card__play-button">
                    <img
                      class="audio-card__play"
                      src="/icons/play-icon.svg"
                      alt="play"
                    />
                  </div>
                  <div class="audio-card__progress-bar">
                    <div class="audio-card__time">1:30:00</div>
                    <div class="audio-card__progress"></div>
                  </div>
                </div>
              </div>
              <div class="audio-card__body">
                <div class="audio-card__date">
                  <div class="audio-card__icon">
                    <img src="/icons/calendar.svg" alt="calendar" />
                  </div>
                  <div class="audio-card__time">08.03.24 23:23</div>
                </div>
                <div class="audio-card__title">
                  Muhiddin Darveshev va Rustam Xamroqulov
                </div>
              </div>
            </div>
            <div class="audio__item audio-card">
              <img
                class="audio-card__texture"
                src="/icons/audio-texture.svg"
              />
              <div class="audio-card__image">
                <img
                  class="audio-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="audio"
                />
                <img
                  class="audio-card__overlay bg"
                  src="/images/Overlay.png"
                  alt=""
                />
                <div class="audio-card__player">
                  <div class="audio-card__play-button">
                    <img
                      class="audio-card__play"
                      src="/icons/play-icon.svg"
                      alt="play"
                    />
                  </div>
                  <div class="audio-card__progress-bar">
                    <div class="audio-card__time">1:30:00</div>
                    <div class="audio-card__progress"></div>
                  </div>
                </div>
              </div>
              <div class="audio-card__body">
                <div class="audio-card__date">
                  <div class="audio-card__icon">
                    <img src="/icons/calendar.svg" alt="calendar" />
                  </div>
                  <div class="audio-card__time">08.03.24 23:23</div>
                </div>
                <div class="audio-card__title">
                  Muhiddin Darveshev va Rustam Xamroqulov
                </div>
              </div>
            </div>
            <div class="audio__item audio-card">
              <img
                class="audio-card__texture"
                src="/icons/audio-texture.svg"
              />
              <div class="audio-card__image">
                <img
                  class="audio-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="audio"
                />
                <img
                  class="audio-card__overlay bg"
                  src="/images/Overlay.png"
                  alt=""
                />
                <div class="audio-card__player">
                  <div class="audio-card__play-button">
                    <img
                      class="audio-card__play"
                      src="/icons/play-icon.svg"
                      alt="play"
                    />
                  </div>
                  <div class="audio-card__progress-bar">
                    <div class="audio-card__time">1:30:00</div>
                    <div class="audio-card__progress"></div>
                  </div>
                </div>
              </div>
              <div class="audio-card__body">
                <div class="audio-card__date">
                  <div class="audio-card__icon">
                    <img src="/icons/calendar.svg" alt="calendar" />
                  </div>
                  <div class="audio-card__time">08.03.24 23:23</div>
                </div>
                <div class="audio-card__title">
                  Muhiddin Darveshev va Rustam Xamroqulov
                </div>
              </div>
            </div>
            <div class="audio__item audio-card">
              <img
                class="audio-card__texture"
                src="/icons/audio-texture.svg"
              />
              <div class="audio-card__image">
                <img
                  class="audio-card__image bg"
                  src="/images/jockers/Image (1).jpg"
                  alt="audio"
                />
                <img
                  class="audio-card__overlay bg"
                  src="/images/Overlay.png"
                  alt=""
                />
                <div class="audio-card__player">
                  <div class="audio-card__play-button">
                    <img
                      class="audio-card__play"
                      src="/icons/play-icon.svg"
                      alt="play"
                    />
                  </div>
                  <div class="audio-card__progress-bar">
                    <div class="audio-card__time">1:30:00</div>
                    <div class="audio-card__progress"></div>
                  </div>
                </div>
              </div>
              <div class="audio-card__body">
                <div class="audio-card__date">
                  <div class="audio-card__icon">
                    <img src="/icons/calendar.svg" alt="calendar" />
                  </div>
                  <div class="audio-card__time">08.03.24 23:23</div>
                </div>
                <div class="audio-card__title">
                  Muhiddin Darveshev va Rustam Xamroqulov
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
