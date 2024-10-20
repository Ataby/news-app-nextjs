import React from "react";
import Dot from "../icons/dot.svg";

const CardSlidersss = ({ newsData }) => {
  return (
    <div className="whole-page">
      <div className="latest">
        <h3>Latest News</h3>
      </div>
      {newsData.map((article, index) => (
        <div className="A" key={index}>
          <div className="B">
            {article.image && <img src={article.image} alt={article.title} />}

            <h3>{article.title}</h3>
          </div>

          <div className="C">
            <p>{article.description.substring(0, 150)}...</p>
          </div>
          <div className="D">
            <h3>Source: {article.source}</h3>
            <h3>Author: {article.author || "Unknown"}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlidersss;
