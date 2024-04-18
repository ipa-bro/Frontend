import phoneIcon from '../img/icons/Phone-icon.svg'
import emailIcon from '../img/icons/Email-icon.svg'
import locationIcon from '../img/icons/Location-icon.svg'

import './footer.scss'

import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer__content">
            <div className="footer__contacts">
                <ul>
                    <li className="contacts__line">
                        <img src={phoneIcon} alt="phone" />
                        <p>
                            +1 234 567 89 00
                        </p>
                    </li>
                    <li className="contacts__line">
                        <img src={emailIcon} alt="email" />
                        <p>
                            ipabash@yandex.ru
                        </p>
                    </li>
                    <li className="contacts__line">
                        <img src={locationIcon} alt="location"/>
                        <p>
                            119180, г. Москва, 1-й Голутвинский переулок, д. 3-5, стр. 1, 5 этаж
                        </p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="copyright">
                © БРО МПА 1996
            </div>
        </div>
    </footer>
  )
}
