import React from "react";
import Header from "../../widgets/header";
import President from "../../img/president.jpeg";
import "./main-page.scss";
import Police from "../../img/police.png";
import Soc from "../../img/soc.png";
import World from "../../img/world.png";
import Commun from "../../img/commun.png";



export default function MainPage() {
  return (
    <div>
      <Header />
      <div className="mainPage">
        <div className="container">
          <div className="mainPage-img">
            <img src={President} alt="Президент МПА БРО" />
          </div>
          <blockquote className="mainPage-text">
            <p>
              В нашем полицейском клубе под знаменем IPA есть место каждому: и
              тем, которые служили Родине не за награды и не ради славы и тем,
              которые находятся сегодня в строю, на переднем крае борьбы с
              преступностью.И очень важно, чтобы мы чтили традиции наших
              ветеранов и помнили всегда мужество и жертвенные поступки тех,
              кого нет с нами.
            </p>
            <h1>Фарахов Тагир Гималиевич</h1>
            <h3>
              Президент Башкортостанского регионального отделения ВПА, Полковник
              милиции
            </h3>
          </blockquote>
        </div>

        <div className="line1"></div>
        <div className="line2"></div>

        {/* О нас */}

        <div className="about__us">
          <div className="container">
            <div className="about__us-text">
              <h1>О нас</h1>
              <p>Международная полицейская ассоциация – INTERNATIONAL POLICE ASSOCIATION (МПА – IPA) – самая большая международная неправительственная организация полицейских и гражданских служащих полиции (милиции), состоящая более чем из 400 тысяч членов.</p>
            </div>
            <div className="about__us-adv">
                <div className="about__us-adv-component">
                  <div className="about__us-adv-component-img">
                    <img src={Police} alt="" />
                  </div>
                  <div className="about__us-adv-component-text">
                      <strong>Широкий охват</strong>
                      <small>Международная полицейская ассоциация – крупнейшая организация в мире, объединяющая более трехсот тысяч полицейских и гражданских служащих полиции</small>
                  </div>
                </div>

                <div className="about__us-adv-component">
                  <div className="about__us-adv-component-img">
                    <img src={World} alt="" />
                  </div>
                  <div className="about__us-adv-component-text">
                      <strong>Большие территории</strong>
                      <small>Мы распологаемся в 69 странах, взаимодействия с иностранными партнёрами</small>
                  </div>
                </div>

                <div className="about__us-adv-component">
                  <div className="about__us-adv-component-img">
                    <img src={Commun} alt="" />
                  </div>
                  <div className="about__us-adv-component-text">
                      <strong>Международное сотрудничество</strong>
                      <small>IPA активно сотрудничает с такими международными организациями, как ЮНЕСКО, ИНТЕРПОЛ и ООН</small>
                  </div>
                </div>

                <div className="about__us-adv-component">
                  <div className="about__us-adv-component-img">
                    <img src={Soc} alt="" />
                  </div>
                  <div className="about__us-adv-component-text">
                      <strong>Широкий спектр деятельности</strong>
                      <small>Основные направления нашей деятельности включают в себя обмен опытом, организацию мероприятий, развитие спорта и содействие полицейскому туризму</small>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
  );
}
