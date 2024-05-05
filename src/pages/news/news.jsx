import React, { useState } from "react";
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";
import NewsCard from "./newsCard";
import "./news.scss";

export default function News() {

  const [newsList, setNewsList] = useState([]);

  const addNews = (newsData) => {
    setNewsList([...newsList, newsData]);
  };

  return (
    <div className="newsPage">
      <Header />
      <div className="container">
        <div className="newsPageControll">
          <h1 className="head-text">Новости</h1>
          <div className="newsPage__section">
            {newsList.map((newsData, index) => (
              <NewsCard key={index} {...newsData} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}







// import React, { useState } from "react";
// import Header from "../../widgets/header";
// import Footer from "../../widgets/foooter";
// import { SlActionRedo } from "react-icons/sl";
// import "./news.scss";
// import NewsCard from "./newsQuery";

// export default function News() {
//   return (
//     <div className="newsPage">
//       <Header />
//       <div className="container">
//         <div className="newsPageControll">
//           <h1 className="head-text">Новости</h1>
//           <div className="newsPage__section">
//             <NewsCard/>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
