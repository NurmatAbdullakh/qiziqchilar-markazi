"use client";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Gostrols from "./components/Home/Gostrols/Gostrols";
import StandUppers from "./components/Home/StandUppers/StandUppers";
import Programs from "./components/Home/Programs/Programs";
import Audios from "./components/Home/Audios/Audios";
import Gallery from "./components/Home/Gallery/Gallery";
import Retro from "./components/Home/Retro/Retro";
import Hero from "./components/Hero/Hero";
import Locations from "./components/Home/Locations/Locations";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  return (
    <main className="main">
      <Hero />
      <StandUppers />
      <Programs />
      <Gostrols />
      <Locations />
      <Retro />
      <Gallery />
      <Audios />
      <section className="news">
        <div className="news__container container">
          <div className="news__title section-title ">
            <div className="section-title__title">Yangiliklar</div>
            <div className="section-title__divider"></div>
            <Link href="/news" className="section-title__all">
              <div className="section-title__all-text">
                Barcha yangiliklar
              </div>
              <img
                className="section-title__all-icon"
                src="/icons/arrowRight.svg"
                alt="arrow-right"
              />
              <img
                className="section-title__all-icon-small"
                src="/icons/smallArrowRight.svg"
                alt="arrow-right"
              />
            </Link>
          </div>
          <div className="news__layout">
            <div className="news__left ">
              <div className="news__left-items">
                <div className="news__item ">
                  <div className="news-card">
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news__item ">
                  <div className="news-card">
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news__item ">
                  <div className="news-card">
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news__item ">
                  <div className="news-card">
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="news__mid">
              <div className="news__mid-items">
                <div className="news__mid-item big-video">
                  <img
                    className="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />

                  <div className="big-video__info">
                    <div className="big-video__date">08.03.24 20:03</div>
                    <div className="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
                <div className="news__mid-item big-video">
                  <img
                    className="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />
                  <img
                    className="big-video__overlay bg"
                    src="/images/video-overlay.png"
                    alt="video"
                  />

                  <div className="big-video__info">
                    <div className="big-video__date">08.03.24 20:03</div>
                    <div className="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
                <div className="news__mid-item big-video">
                  <img
                    className="big-video__image bg"
                    src="/images/big-video.jpg"
                    alt="video"
                  />
                  <img
                    className="big-video__overlay bg"
                    src="/images/video-overlay.png"
                    alt="video"
                  />

                  <div className="big-video__info">
                    <div className="big-video__date">08.03.24 20:03</div>
                    <div className="big-video__title">
                      Askiya – yashirin fikr sehri, hozirjavob xalqimizning
                      noyob xazinasi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="news__right ">
              <div className="news__right-items">
                <div className="news__right-item">
                  <div className="news__item news-card">
                    <img
                      className="news-card__texture"
                      src="/icons/news-card-texture.svg"
                      alt="texture"
                    />
                    <div className="news-card__image">
                      <img
                        className="news-card__bg bg"
                        src="/images/video.jpg"
                        alt="video"
                      />
                    </div>
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
                        O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev
                        Rossiya Federatsiyasiga rasmiy tashrifning birinchi
                        manzili – Qozon shahriga bordi.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news__right-item">
                  <div className="news__item news-card">
                    <img
                      className="news-card__texture"
                      src="/icons/news-card-texture.svg"
                      alt="texture"
                    />
                    <div className="news-card__image">
                      <img
                        className="news-card__bg bg"
                        src="/images/video.jpg"
                        alt="video"
                      />
                    </div>
                    <div className="news-card__body">
                      <div className="news-card__date">
                        <img
                          className="news-card__icon"
                          src="/icons/calendar.svg"
                          alt="calendar"
                        />
                        <div className=" news-card__time">08.03.24 23:23</div>
                      </div>
                      <div className="news-card__title">
                        Qo’qon askiyachilari- Muhiddin Darveshev va Rustam
                        Xamroqulov
                      </div>
                      <div className="news-card__description">
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
      <section className="partners">
        <div className="partners__container container">
          <div className="partners__title">
            <div className="section-title__title">Hamkorlar</div>
          </div>
        </div>
        <div className="partners__content">
          <div className="partners__items">
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
          </div>
          <div className="partners__items">
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner2.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner3.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner4.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
                  src="/images/partner1.png"
                  alt="partner"
                />
              </div>
            </div>
            <div className="partners__item">
              <div className="partners__logo">
                <img
                  className="partners__image bg"
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
