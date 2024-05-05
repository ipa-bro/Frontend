import React from 'react'

import './contacts.scss'
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";

export default function Contacts() {
  return (
    <div className="contacts">
        <Header />
    <div className="contacts__content">
        <div className="container">
        <h1>
            Московское региональное отделение
        </h1>
        <div className="contacts__content__line">
            <ul className="contacts__content__list">
                <li>
                    <p className="title">
                        Фактический адрес
                    </p>
                    <h3 className="main-text">
                        119180, г. Москва, 1-й Голутвинский переулок, д.3-5, стр.1, 5 этаж
                    </h3>
                </li>
                <li>
                    <p className="title">
                        График работы офиса
                    </p>
                    <h3 className="main-text">
                        Пн - Пт: 9:00-18:00
                    </h3>
                </li>                <li>
                    <p className="title">
                        Телефон
                    </p>
                    <h3 className="main-text">
                        +7 499 238 07 10
                    </h3>
                </li>                <li>
                    <p className="title">
                        Email
                    </p>
                    <h3 className="main-text">
                        mosipa@mail.ru
                    </h3>
                </li>                <li>
                    <p className="title">
                        Всероссийская полицейская ассоциация МПА
                    </p>
                    <h3 className="main-text">
                        http://ipa-russia.org/
                    </h3>
                </li>
            </ul>
            <div className="contacts__map">
                <a href="https://yandex.ru/maps/?um=constructor%3A3169aa752e69f142056cce42a870f4d347a5f60da327b3b2a03f9ddc1a502146&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A3169aa752e69f142056cce42a870f4d347a5f60da327b3b2a03f9ddc1a502146&amp;width=500&amp;height=400&amp;lang=ru_RU" alt=""  /></a>
            </div>
        </div>
        </div>
        <hr />
        <hr />
     <div className="container">
        <h1>
            Региональное отделение Башкортостана
        </h1>
        <div className="contacts__content__line">
            <ul className="contacts__content__list">
                <li>
                    <p className="title">
                        Фактический адрес
                    </p>
                    <h3 className="main-text">
                        Республика Башкортостан, Уфа, улица Менделеева, 128/1
                    </h3>
                </li>
                <li>
                    <p className="title">
                        График работы офиса
                    </p>
                    <h3 className="main-text">
                        Пн - Пт: 9:00-18:00
                    </h3>
                </li>                <li>
                    <p className="title">
                        Телефон
                    </p>
                    <h3 className="main-text">
                        8 917 342 78 49
                    </h3>
                </li>                <li>
                    <p className="title">
                        Email
                    </p>
                    <h3 className="main-text">
                        farahov_tg@mail.ru
                    </h3>
                </li>                <li>
                    <p className="title">
                        Всероссийская полицейская ассоциация МПА
                    </p>
                    <h3 className="main-text">
                        http://ipa-russia.org/
                    </h3>
                </li>
            </ul>
            <div className="contacts__map">
                <a href="https://yandex.ru/maps/?um=constructor%3Ad28f52aea2d5adc3b2579c2fd008e035603c89102ad6137cf765e02ddbecf2f9&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ad28f52aea2d5adc3b2579c2fd008e035603c89102ad6137cf765e02ddbecf2f9&amp;width=600&amp;height=400&amp;lang=ru_RU" alt=""/></a>
            </div>
        </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}

