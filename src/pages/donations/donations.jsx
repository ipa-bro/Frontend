import React from 'react'

import exclamation from '../../img/icons/exclamation-Icon.svg'
import succes from '../../img/icons/succes-Icon.svg'
import ruble from '../../img/icons/ruble-Icon.svg'

import './donations.scss'

import Header from '../../widgets/header';
import Footer from '../../widgets/foooter';


export default function Donations() {
  return (
    <div className="donations">
      <Header />
      <div className="container">
            <div className="donations__content">
                <div className="conditions">
                    <h3>
                    Перечисление пожертвований происходит на счет Башкирского регионального отделения Ассоциации
                    </h3>
                    <ul>
                        <li>
                            <img src={exclamation} alt="exclamation" />
                            <p>В графе <strike>«Назначение платежа»</strike> <b>ОБЯЗАТЕЛЬНО</b> указать связь с региональным отделением</p>
                        </li>
                        <li>
                            <img src={succes} alt="succes" />
                            <p>Заполнить все поля формы</p>
                        </li>
                        <li>
                            <img src={ruble} alt="ruble" />
                            <p>После оплаты на Ваш указанный электронный адрес придет чек</p>
                        </li>
                    </ul>
                </div>

                <div className="exponential"></div>
            </div>
            </div>
      <Footer />
    </div>
  )
}