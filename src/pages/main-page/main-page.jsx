import React from "react";
import Header from "../../widgets/header";
import President from "../../img/president.jpeg";
import './main-page.scss'

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
              преступностью.И очень важно, чтобы мы чтили традиции наших ветеранов
              и помнили всегда мужество и жертвенные поступки тех, кого нет с
              нами.
            </p>
            <h1>Фарахов Тагир Гималеевич</h1>
            <h3>
              Президент Башкортостанского регионального отделения ВПА, Полковник
              полиции
            </h3>
          </blockquote>
        </div>
      </div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}
