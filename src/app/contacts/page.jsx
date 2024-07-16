"use client";
import { useEffect, useRef } from "react";
import { useCreateArizalarMutation } from "../../api/api.service";
import { Checkbox, useToast } from '@chakra-ui/react'

const News = () => {
    const { mutate, isSuccess, isPending } = useCreateArizalarMutation();
    const form = useRef();
    const toast = useToast()


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("submit", data);
        mutate(data);
    }
    useEffect(() => {
        if (isSuccess) {
            toast({
                title: 'Ariza qabul qilindi',
                status: 'success',
                duration: 4500,
                isClosable: true,
            })
            form.current.reset();
        }

    })



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

                        <form ref={form} onSubmit={onSubmit} className="form__body">
                            <div className="form__name">
                                <label for="name" className="form__label">To‘liq ismingiz</label>
                                <input placeholder="To’liq ismingizni kiring" required name="name" className="form__input" />
                            </div>
                            <div className="form__row">
                                <div className="form__phone">
                                    <label for="phone" className="form__label">Telefon raqamingiz</label>
                                    <input required placeholder="+998 ... .. .." type="number" name="phone" className="form__input" />
                                </div>
                                <div className="form__school">
                                    <label for="school" className="form__label">Maxorat maktabi</label>
                                    <input required name="school" className="form__input" />
                                </div>
                            </div>
                            <div className="form__message">
                                <label for="message" className="form__label">Xabaringizni kiriting</label>
                                <textarea placeholder="Xabaringizni to’liq yozib yuboring" name="message" className="form__textarea"></textarea>
                            </div>
                            <div className="form__row">
                                <div className="form__accept">
                                    <Checkbox required colorScheme='orange' size={"lg"} name="accept" />
                                    <label className="form-checkbox__container">
                                        <a href="#">Foydalanish shartlari </a>
                                        <span>va</span> <a href="#"> maxfiylik siyosati</a>
                                        <span>bilan tanishib chiqdim</span>
                                    </label>
                                </div>
                                <button type="submit" disabled={isPending}>Yuborish</button>
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