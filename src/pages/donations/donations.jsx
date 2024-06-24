import React from "react";
import exclamation from "../../img/icons/exclamation-Icon.svg";
import succes from "../../img/icons/succes-Icon.svg";
import ruble from "../../img/icons/ruble-Icon.svg";
import "./donations.scss";
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";


export default function Donations() {
  return (
    <div className="donations">
      <Header />
      <div className="container">
        <div className="donations__content">
          <div className="conditions">
            <h3>
              Перечисление пожертвований происходит на счет Башкирского
              регионального отделения Ассоциации
            </h3>
            <ul>
              <li>
                <img src={exclamation} alt="exclamation" />
                <p>
                  1. Просканируйте QR-код с телефона, или просто{" "}
                  <strike>нажмите на него</strike>
                </p>
              </li>
              <li>
                <img src={succes} alt="succes" />
                <p> 2. Заполнить все поля формы</p>
              </li>
              <li>
                <img src={ruble} alt="ruble" />
                <p>3. Укажите сумму пожертвования, спасибо!</p>
              </li>
            </ul>
          </div>

          <div className="exponential"></div>
        </div>

          <p className="contract">
            Башкортостанское региональное отделение (регион) Общероссийской
            общественной организации "Всероссийская полицейская ассоциация МПА"
            <br />
            ИНН: 4070381000147000000881
            <br />
            ОГРН: 1100200004960
            <br />
            Юр. адрес: 450071 Российская Федерация РЕСПУБЛИКА БАШКОРТОСТАН, Г.
            УФА ул. Менделеева д. 205 к. А
            <br />
          </p>
      </div>
      <Footer />
    </div>
  );
}
