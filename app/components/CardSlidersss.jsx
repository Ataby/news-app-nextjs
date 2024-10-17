import React from "react";
import Dot from "../icons/dot.svg";

const CardSlidersss = ({ newsData }) => {
  return (
    <div className="whole-page">
      {newsData.map((article, index) => (
        <div className="A" key={index}>
          <div className="D">
            <img src={Dot} alt="" />
            <h3>
              By: {article.source}-{article.author}
            </h3>
          </div>
          <div className="B">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>

          <div className="C">
            <p>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlidersss;
