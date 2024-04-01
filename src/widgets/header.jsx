import React from 'react';
import LogoBash from "../img/logo-bash.png"
import LogoIpa from "../img/logo-ipa.png"
import './widgets.scss';


export default function Header() {
  return (
    <div className="header">
        <div className="container">
            <div className="navbar__all">
                <div className="navbar__all-logos">
                    <div className="navbar__all-logos-photo1">
                        <img src={LogoBash} alt='Логотип МПА'/>
                    </div>
                    <div className="navbar__all-logos-photo2">
                        <img src={LogoIpa} alt='Логотип МПА'/>
                    </div>
                </div>
                <div className="navbar__all-links">
                    <a href="#">Главная</a>
                    <select name="about-association" className="about-association">
                        <option value="value1"><a href="#">Новости</a></option>
                        <option value="value2"><a href="#">Участники</a></option>
                        <option value="value2"><a href="#">Вступить</a></option>
                    </select>
                    <a href="#">Пожертвовать</a>
                    <a href="#">Контактная информация</a>
                </div>
            </div>
        </div>
    </div>
  )
}
