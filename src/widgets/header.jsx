import React, { useState } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import LogoBash from "../img/logo-bash.png"
import LogoIpa from "../img/logo-ipa.png"
import './widgets.scss';
import {MenuButton} from "../widgets/menuButton";

export default function Header() {
    const [isOpen, setOpen] = useState();

  return (
    <div className="header">
        <div className="header__logo1">
            <img src={LogoBash}/>
        </div>
        <div className="header__logo2">
            <img src={LogoIpa}/>
        </div>
        <div className={`header__nav ${isOpen ? "active" : ""}`}>
            <ul className="header__nav-list">
                <li className="header__nav-item"><Link to="/">Главная</Link></li>
                <li className="header__nav-item"><Link to="/news">Новости</Link></li>
                <li className="header__nav-item"><Link to="/members">Участники</Link></li>
                <li className="header__nav-item"><Link to="/join">Вступить</Link></li>
                <li className="header__nav-item"><Link to="/donations">Пожертвовать</Link></li>
                <li className="header__nav-item"><Link to="https://mpa71.ru/">Академия</Link></li>
                <li className="header__nav-item"><Link to="/contacts">Контактная информация</Link></li>
                
            </ul>
        </div>
        <MenuButton isActive={isOpen} onClick={()=> setOpen(!isOpen)}/>
    </div>



    // <div className="header">
    //     <div className="container">
    //         <div className="navbar__all">
    //             <div className="navbar__all-logos">
    //                 <div className="navbar__all-logos-photo1">
    //                     <img src={LogoBash} alt='Логотип МПА'/>
    //                 </div>
    //                 <div className="navbar__all-logos-photo2">
    //                     <img src={LogoIpa} alt='Логотип МПА'/>
    //                 </div>
    //             </div>
    //             <div className="navbar__all-links">
    //                 <a href="#">Главная</a>
    //                 <select name="about-association" className="about-association">
    //                     <option value="value1"><a href="#">Новости</a></option>
    //                     <option value="value2"><a href="#">Участники</a></option>
    //                     <option value="value2"><a href="#">Вступить</a></option>
    //                 </select>
    //                 <a href="#">Пожертвовать</a>
    //                 <a href="#">Контактная информация</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>

  )
}
