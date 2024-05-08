import React from "react";
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";

import Farahov from "../../img/members-img/Farahov.png";
import Gaizullin from "../../img/members-img/Gaizullin.png";
import Muhamadeev from "../../img/members-img/Muhamadeev.png";
import Lavrentev from "../../img/members-img/Lavrentev.png";
import Sharafutdinov from "../../img/members-img/Sharafutdinov.png";
import Zinatullin from "../../img/members-img/Zinatullin.png";
import Safonov from "../../img/members-img/safonov.jpeg";
import "./members.scss";

export default function Members() {
  return (
    <div>
      <Header />
      <div className="members">
        <div className="container">
          <h1>Структура БРО МПА</h1>

          <ul className="members-list">
            <li id="Farahov">
              {/* <div className="member"> */}
              <img src={Farahov} alt="member" />
              <div className="li-text">
                <b className="name">Фарахов Тагир Гималиевич</b>
                <div className="job-title">Президент БРО ВПА</div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 04.04.1947</div>
              </div>
              {/* </div> */}
            </li>

            <li>
              <img src={Muhamadeev} alt="member" />
              <div className="li-text">
                <b className="name">Мухамадеев Индус Хамитович</b>
                <div className="job-title">
                  Вице - президент и казначей БРО ВПА
                </div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 02.10.1943</div>
              </div>
            </li>

            <li>
              <img src={Sharafutdinov} alt="member" />
              <div className="li-text">
                <b className="name">Шарафутдинов Шамиль Фатыхович</b>
                <div className="job-title">Вице-президент БРО ВПА</div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 15.06.1953</div>
              </div>
            </li>

            <li>
              <img src={Gaizullin} alt="member" />
              <div className="li-text">
                <b className="name">Гайзуллин Радик Закуанович</b>
                <div className="job-title">Секретарь БРО ВПА</div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 29.08.1970</div>
              </div>
            </li>

            <li>
              <img src={Zinatullin} alt="member" />
              <div className="li-text">
                <b className="name">Зинатуллин Арсен Альбертович</b>
                <div className="job-title">Помощник Президента</div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 22.04.1989</div>
              </div>
            </li>

            <li>
              <img src={Lavrentev} alt="member" />
              <div className="li-text">
                <b className="name">Лаврентьев Сергей Николаевич</b>
                <div className="job-title">Вице-президент БРО ВПА</div>
                <div className="li-line"></div>
                <div className="date-of-birth">День рождения: 19.04.1952</div>
              </div>
            </li>

            <div className="last-line-card">
              <div className="last-line-card-img">
                <img src={Safonov} alt="member" />
              </div>
              <div className="li-txt">
                <b className="name">Сафонов Владимир <br />Краснославович</b>
                <div className="job-title">Вице-президент БРО ВПА</div>
                <div className="date-of-birth">День рождения: 07.01.1961</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
