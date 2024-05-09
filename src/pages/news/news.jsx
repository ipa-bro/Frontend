import React from "react";
import Header from "../../widgets/header";
import Footer from "../../widgets/foooter";
import "./news.scss";
import NewsCard from "./newsCard";

export default function News() {
  return (
    <div className="newsPage">
      <Header />
      <div className="container">
        <div className="newsPageControll">
          <h1 className="head-text">Новости</h1>
          <NewsCard />
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
// import NewsCard from "./newsCard";

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
