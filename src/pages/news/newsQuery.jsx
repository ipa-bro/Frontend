import { useState, useEffect } from "react"; 
import "./news.scss"; 
import { SlActionRedo } from "react-icons/sl";

const NewsCard = () => {
  const [news, setNews] = useState([]); 

  useEffect(() => {
    fetchNews(); 
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("Дима вставь сюда ссылку на API"); 
      const data = await response.json(); 
      setNews(data); 
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="newsPage__section-card">
      {news.map((item) => (
        <div key={item.id} className="newsPage__section-card-info">
          <div className="newsPage__section-card-info-img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="newsPage__section-card-info-text">
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </div>
        </div>
      ))}
      <div className="newsPage__section-card-read">
        <div className="newsPage__section-card-read-line"></div>
        <div className="newsPage__section-card-read-text">
          <strong>Читать полностью</strong>{" "}
          <SlActionRedo className="linkButton" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 