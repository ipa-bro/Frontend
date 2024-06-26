import React, { useState } from "react"; 
import axios from "axios"; 
import "./join-an-association.scss"; 
import Header from "../../widgets/header"; 
import Footer from "../../widgets/foooter"; 
 
const JoinAnAssociation = () => { 
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
      await axios.post((`${import.meta.env.VITE_APP_API_URL}/invite`), formData, { 
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
    <div className="JoinAnAssociation"> 
      <Header /> 
      <div className="JoinAnAssociation__content"> 
        <div className="container"> 
          <h1> 
            Для вступления в Башкирское региональное отделение ВПА необходимо 
            подготовить и подать следующие документы: 
          </h1> 
          <div className="form-line"> 
            <ul className="documents"> 
              <li> 
                Заполненная анкета вступающего в ВПА с положительной 
                рекомендацией одного из членов ВПА 
                <p> 
                  (скачать&nbsp; {/* spase */} 
                  <a href="https://ipa-moscow.ru/wp-content/uploads/2021/06/ANKETA-MRO-VPA-lgotnik.docx"> 
                    АНКЕТА МРО ВПА 
                  </a> 
                  ); 
                </p> 
              </li> 
              <li>Ксерокопия пенсионного удостоверения;</li> 
              <li>Выписка из трудовой книжки;</li> 
              <li>Cправка с места с работы (если работаете);</li> 
              <li>Ксерокопия паспорта РФ — основная страница;</li> 
              <li>Ксерокопия паспорта РФ — страница с регистрацией;</li> 
              <li>Ксерокопия заграничного паспорта (если имеется);</li> 
              <li> 
                2 фото 3.5х4.5 цветные, матовые в форме или строгом костюме. 
              </li> 
            </ul> 
            <form onSubmit={handleSubmit}> 
              <h1>Отправить анкету</h1> 
              <input 
                type="text" 
                name="fullName" 
                placeholder="ФИО" 
                value={username} 
                onChange={handleUsernameChange} 
              /> 
              <input 
                type="number" 
                name="phoneNumber" 
                placeholder="Телефон" 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
              /> 
              <input 
                type="file" 
                accept=".pdf" 
                name="" 
                id="" 
                onChange={handleFileChange} 
              /> 
              <input 
                type="submit" 
                value="Отправить анкету" 
                className="custom-button" 
              /> 
            </form> 
          </div> 
        </div> 
        <hr /> 
        <hr /> 
        <div className="container"> 
          <div className="join-also"> 
            <p> 
              Вы также можете отправить заявку на вступление в IPA. Для 
              формирования электронной заявки Вам необходимо подготовить 
              следующие документы: 
            </p> 
            <ul> 
              <li>сканированное изображение пенсионного удостоверения;</li> 
              <li>сканированное изображение выписки из трудовой книжки;</li> 
              <li> 
                сканированное изображение справки с места с работы (если 
                работаете); 
              </li> 
              <li> 
                сканированное изображение паспорта РФ — основная страница; 
              </li> 
              <li> 
                сканированное изображение паспорта РФ — страница с регистрацией; 
              </li> 
              <li> 
                сканированное изображение заграничного паспорта (если имеется); 
                фото 3.5х4.5 цветное. 
              </li> 
            </ul> 
            <p> 
              Все документы должны быть предоставлены в формате jpeg, цветное 
              изображение с разрешением 300dpi. Документы должны быть готовы к 
              печати без дополнительной обработки. 
            </p> 
            <h2> 
              ВНИМАНИЕ! РАССМАТРИВАЮТСЯ ТОЛЬКО ПОЛНОСТЬЮ ЗАПОЛНЕННЫЕ АНКЕТЫ С 
              ПРИЛОЖЕНИЕМ ВСЕХ ПЕРЕЧИСЛЕННЫХ ВЫШЕ СКАНИРОВАННЫХ ДОКУМЕНТОВ. 
            </h2> 
 
            <p> 
              После принятия решения о вступлении заявителя в ВПА Вам будет 
              выслано оповещение по электронной почте. При положительном решении 
              Вы будете проинформированы о дате получения удостоверения IPA. При 
              получении удостоверения имейте с собой оригиналы документов, 
              сканированное изображение которых Вы передаёте при формировании 
              заявления о вступлении он-лайн. Вы также можете оплачивать 
              членские взносы, используя электронный платёж. 
            </p> 
            <div className="appllication"> 
              <h2>ЗАЯВЛЕНИЕ</h2> 
              <p> 
                Прошу принять меня в ряды Всероссийской полицейской ассоциации 
                МПА. Я разделяю полностью цели и задачи ассоциации, закрепленные 
                в ее Уставе и обязуюсь соблюдать все правила, изложенные в 
                Уставе Всероссийской полицейской ассоциации МПА. Обязуюсь 
                принимать участие в деятельности Ассоциации, добросовестно 
                исполнять свои обязанности члена ВПА МПА, в установленные сроки 
                ежегодно уплачивать членские взносы в свое Региональное 
                отделение (регион). 
              </p> 
            </div> 
          </div> 
        </div> 
      </div> 
      <Footer /> 
    </div> 
  ); 
}; 
 
export default JoinAnAssociation;