import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { SlActionRedo } from "react-icons/sl";
import "./news.scss";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

const transformPhotoUrl = (url) => {
  const basePath = "/var/www/dist";
  return url.replace(basePath, "");
};

const NewsCard = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}/events`)
      .then((response) => {
        const updatedNewsList = response.data.map((newsItem) => ({
          ...newsItem,
          photoUrl: transformPhotoUrl(newsItem.photoUrl),
        }));
        setNewsList(updatedNewsList.reverse());
      })
      .catch((error) => {
        console.log("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className="newsPage__section">
      {newsList.map((newsItem) => (
        <NewsCardItem key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

const NewsCardItem = ({ newsItem }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { photoUrl, title, description, fullDescription, date, location } =
    newsItem; 

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

 
  const formattedDate = date
    ? new Date(date).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Дата не указана";

  return (
    <div className="newsPage__section-card">
      <div className="newsPage__section-card-info">
        <div className="newsPage__section-card-info-img">
          <img src={photoUrl} alt="" />
        </div>
        <div className="newsPage__section-card-info-text">
          <strong>{title}</strong>
          <small>{description}</small>

          {date && <small>Дата: {formattedDate}</small>}
          {location && <small>Место проведения: {location}</small>}
        </div>
      </div>
      <div className="newsPage__section-card-read">
        <div className="newsPage__section-card-read-line"></div>
        <div onClick={openModal} className="newsPage__section-card-read-text">
          <strong>Читать полностью</strong>{" "}
          <SlActionRedo className="linkButton" />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="News Modal"
      >
        <div className="modal">
          <h2 className="modalName">{title}</h2>
          {date && <p>
            <strong>Дата:</strong> {formattedDate}
          </p>}
          {location && <p>
            <strong>Место проведения:</strong> {location}
          </p>}
          <div className="modalPhoto">
            <img src={photoUrl} alt="" />
          </div>
          <p>{fullDescription}</p>
          <button onClick={closeModal} className="custom-button">
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NewsCard;