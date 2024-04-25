import React from "react";
import "../../widgets/mixins.scss";
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";
import Group from "../../img/group.png";
import { SlActionRedo } from "react-icons/sl";
import "./news.scss";
import NewsCard from "./newsQuery"

export default function News() {
  return (
    <div className="newsPage">
      <Header />
      <div className="container">
        <div className="newsPageControll">
          <h1 className="head-text">Новости</h1>
          <div className="newsPage__section">
            <div className="newsPage__section-card">
              <div className="newsPage__section-card-info">
                <div className="newsPage__section-card-info-img">
                  <img src={Group} alt="" />
                </div>
                <div className="newsPage__section-card-info-text">
                  <strong>Башкирской полиции 100 лет!</strong>
                  <small>
                    17 августа 2017 года министр внутренних дел Башкирии
                    подписал приказ № 650 «Об объявлении 23 января Днём
                    образования Башкирской полиции"
                  </small>
                </div>
              </div>
              <div className="newsPage__section-card-read">
                <div className="newsPage__section-card-read-line"></div>
                <div className="newsPage__section-card-read-text">
                  <strong>Читать полностью</strong>{" "}
                  <SlActionRedo className="linkButton" />
                </div>
              </div>
            </div>

            <div className="newsPage__section-card">
              <div className="newsPage__section-card-info">
                <div className="newsPage__section-card-info-img">
                  <img src={Group} alt="" />
                </div>
                <div className="newsPage__section-card-info-text">
                  <strong>Башкирской полиции 100 лет!</strong>
                  <small>
                    17 августа 2017 года министр внутренних дел Башкирии
                    подписал приказ № 650 «Об объявлении 23 января Днём
                    образования Башкирской полиции»
                  </small>
                </div>
              </div>
              <div className="newsPage__section-card-read">
                <div className="newsPage__section-card-read-line"></div>
                <div className="newsPage__section-card-read-text">
                  <strong>Читать полностью</strong>{" "}
                  <SlActionRedo className="linkButton" />
                </div>
              </div>
            </div>

            <div className="newsPage__section-card">
              <div className="newsPage__section-card-info">
                <div className="newsPage__section-card-info-img">
                  <img src={Group} alt="" />
                </div>
                <div className="newsPage__section-card-info-text">
                  <strong>Башкирской полиции 100 лет!</strong>
                  <small>
                    17 августа 2017 года министр внутренних дел Башкирии
                    подписал приказ № 650 «Об объявлении 23 января Днём
                    образования Башкирской полиции»
                  </small>
                </div>
              </div>
              <div className="newsPage__section-card-read">
                <div className="newsPage__section-card-read-line"></div>
                <div className="newsPage__section-card-read-text">
                  <strong>Читать полностью</strong>{" "}
                  <SlActionRedo className="linkButton" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
