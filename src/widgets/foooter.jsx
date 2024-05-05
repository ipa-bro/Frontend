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
                            +7 917 342 78 49
                        </p>
                    </li>
                    <li className="contacts__line">
                        <img src={emailIcon} alt="email" />
                        <p>
                            farahov_tg@mail.ru
                        </p>
                    </li>
                    <li className="contacts__line">
                        <img src={locationIcon} alt="location"/>
                        <p>
                            г. Уфа, ул. Менделеева 128/1 секция "В"
                        </p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="copyright">
                © БРО МПА 
            </div>
        </div>
    </footer>
  )
}
