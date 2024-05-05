import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { SlActionRedo } from "react-icons/sl";
import axios from "axios";
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

const NewsCard = ({ photoUrl, title, description, fullDescription }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("Ссылка на апи/url")
      .then((response) => {
        const { photoUrl, title, description, fullDescription } = response.data;
        setPhotoUrl(photoUrl);
        setTitle(title);
        setDescription(description);
        setFullDescription(fullDescription);
      })
      .catch((error) => {
        console.log("ошибка при получении данных:", error);
      });
  }, []); 

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="newsPage__section-card">
      <div className="newsPage__section-card-info">
        <div className="newsPage__section-card-info-img">
          <img src={photoUrl} alt="" />
        </div>
        <div className="newsPage__section-card-info-text">
          <strong>{title}</strong>
          <small>{description}</small>
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
