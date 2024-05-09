import React, { useState, useEffect } from "react";
import Header from "../../widgets/header";
import President from "../../img/president.jpeg";
import "./main-page.scss";
import "../../widgets/mixins.scss";
import Police from "../../img/police.png";
import Soc from "../../img/soc.png";
import World from "../../img/world.png";
import Commun from "../../img/commun.png";
import Group from "../../img/group.png";
import IPA from "../../img/ipa.jpeg";
import Football from "../../img/football1.jpeg";
import Downl from "../../img/downl.png";
import Export from "../../img/export.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../../widgets/foooter";

export default function MainPage() {
  const [file, setFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Пожалуйста, выберите файл для загрузки");
      return;
    }

    const formData = new FormData();
    formData.append("phone_number", phoneNumber);
    formData.append("username", username);
    formData.append("pdf_file", file);

    try {
      await axios.post(`${import.meta.env.VITE_APP_API_URL}/invite`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Файл успешно отправлен, спасибо!");
    } catch (error) {
      console.error("Ошибка загрузки файла:", error);
      alert("Произошла ошибка при загрузке файла");
    }
  };
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
              <h1 className="head-text">О нас</h1>
              <p>
                Международная полицейская ассоциация – INTERNATIONAL POLICE
                ASSOCIATION (МПА – IPA) – самая большая международная
                неправительственная организация полицейских и гражданских
                служащих полиции (милиции), состоящая более чем из 400 тысяч
                членов.
              </p>
            </div>
            <div className="about__us-adv">
              <div className="about__us-adv-component">
                <div className="about__us-adv-component-img">
                  <img src={Police} alt="" />
                </div>
                <div className="about__us-adv-component-text">
                  <strong>Широкий охват</strong>
                  <small>
                    Международная полицейская ассоциация – крупнейшая
                    организация в мире, объединяющая более трехсот тысяч
                    полицейских и гражданских служащих полиции
                  </small>
                </div>
              </div>

              <div className="about__us-adv-component">
                <div className="about__us-adv-component-img">
                  <img src={World} alt="" />
                </div>
                <div className="about__us-adv-component-text">
                  <strong>Большие территории</strong>
                  <small>
                    Мы распологаемся в 69 странах, взаимодействия с иностранными
                    партнёрами
                  </small>
                </div>
              </div>

              <div className="about__us-adv-component">
                <div className="about__us-adv-component-img">
                  <img src={Commun} alt="" />
                </div>
                <div className="about__us-adv-component-text">
                  <strong>Международное сотрудничество</strong>
                  <small>
                    IPA активно сотрудничает с такими международными
                    организациями, как ЮНЕСКО, ИНТЕРПОЛ и ООН
                  </small>
                </div>
              </div>

              <div className="about__us-adv-component">
                <div className="about__us-adv-component-img">
                  <img src={Soc} alt="" />
                </div>
                <div className="about__us-adv-component-text">
                  <strong>Широкий спектр деятельности</strong>
                  <small>
                    Основные направления нашей деятельности включают в себя
                    обмен опытом, организацию мероприятий, развитие спорта и
                    содействие полицейскому туризму
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>

        <div className="news">
          <div className="container">
            <div className="controll-news">
              <div className="controll-news-text">
                <h1 className="head-text">Знаменательные даты</h1>
                <p>
                  Важнейшие события для Башкирского реганального отделения
                  всероссийской полицейской ассоциации
                </p>
              </div>
              <div className="news__section">
                <div className="news__section-card">
                  <div className="news__section-card-info">
                    <div className="news__section-card-info-img">
                      <img src={IPA} alt="" />
                    </div>
                    <div className="news__section-card-info-text">
                      <strong>Основание ВПА</strong>
                      <small>
                        28 марта в 1992 году была основана Всероссийская
                        полицейская ассоциация МПА. Объединяющая региональные
                        отделения в Российской Федерации.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="news__section-card">
                  <div className="news__section-card-info">
                    <div className="news__section-card-info-img">
                      <img src={Group} alt="" />
                    </div>
                    <div className="news__section-card-info-text">
                      <strong>Основание Башкиркого отделения</strong>
                      <small>
                        18 июня 2007 году образовано Башкортостанское
                        региональное отделение ВПА, силами Президента БРО ВПА
                        МПА Фарахова Тагира Гималиевича и его сторонниками.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="news__section-card">
                  <div className="news__section-card-info">
                    <div className="news__section-card-info-img">
                      <img src={Football} alt="" />
                    </div>
                    <div className="news__section-card-info-text">
                      <strong>
                        Открытие Центра развития и поддержки спорта в РБ
                      </strong>
                      <small>
                        В 2008 году был открыт центр развития и поддержки спорта
                        РБ - Мини-футбол. Команда по сей день показывает
                        стабильно хорошие результаты на спортином поприще. Также
                        ведутся работы по популяризации ЗОЖ.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-to-news">
          <Link to="/news">
            <button className="custom-button">Посмотреть новости</button>{" "}
          </Link>
        </div>

        <div className="line1"></div>
        <div className="line2"></div>

        <div className="join__main">
          <div className="container">
            <div className="join__main-head">
              <h1 className="head-text">Вступить в ассоциацию</h1>
              <div className="join__main-head-controll">
                <div className="join__main-head-info">
                  <h2>
                    Для вступления в Башкирское региональное отделение
                    <br />
                    международной полицейской ассоциации необходимо:
                  </h2>
                  <div className="join__main-head-info-controll">
                    <div className="join__main-head-info-instr">
                      <div className="join__main-head-info-instr-img">
                        <img src={Downl} alt="скачать анкету" />
                      </div>
                      <div className="join__main-head-info-instr-text">
                        <p>Скачать и заполнить анкету</p>
                        <a
                          href="https://ipa-moscow.ru/wp-content/uploads/2021/06/ANKETA-MRO-VPA-lgotnik.docx"
                          download
                        >
                          Анкета
                        </a>
                      </div>
                    </div>
                    <div className="join__main-head-info-instr">
                      <div className="join__main-head-info-instr-img">
                        <img src={Export} alt="отправить анкету" />
                      </div>
                      <p>
                        Заполнить форму <br />и отправить анкету
                      </p>
                    </div>
                  </div>
                </div>

                <div className="join__main-head-quest" onSubmit={handleSubmit}>
                  <h2>Отправить анкету</h2>
                  <input
                    type="text"
                    placeholder="ФИО"
                    className="join__main-head-quest-form"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <input
                    type="number"
                    placeholder="Телефон"
                    className="join__main-head-quest-form"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                  <input
                    type="file"
                    accept=".pdf"
                    className="join__main-head-quest-file"
                    onChange={handleFileChange}
                  />
                  <div className="join__main-head-quest-button">
                    <button type="submit" className="custom-button">
                      Отправить анкету
                    </button>
                  </div>
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
