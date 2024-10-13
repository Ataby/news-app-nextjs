import React from "react";
import styles from "../styles/globals.scss";

const CardSlider = ({ newsData }) => {
  return (
    <div className="whole-page">
      {newsData.map((article, index) => (
        <div className="card" key={index}>
          <img src={article.image} alt={article.title} />
          <h2 className="card-title">{article.title}</h2>
          <p className="card-description">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
