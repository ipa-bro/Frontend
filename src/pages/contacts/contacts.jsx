import React from 'react'

import './contacts.scss'
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";

export default function Contacts() {
  return (
    <div className="contacts">
        <Header />
        
    <div className="container">
        <div className="contacts__content">
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
                            +1 234 567 89 00
                        </h3>
                    </li>                <li>
                        <p className="title">
                            Email
                        </p>
                        <h3 className="main-text">
                            ipabash@yandex.ru
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
                <a href="https://yandex.ru/maps/?um=constructor%3Ad28f52aea2d5adc3b2579c2fd008e035603c89102ad6137cf765e02ddbecf2f9&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Ad28f52aea2d5adc3b2579c2fd008e035603c89102ad6137cf765e02ddbecf2f9&amp;width=600&amp;height=400&amp;lang=ru_RU" alt="" /></a>
                </div>
            </div>

            <hr />


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

