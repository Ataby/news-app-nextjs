import React from "react";


const CardSlider = ({ newsData }) => {
  return (
    <div className="whole-page" >
      {newsData.map((article, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="card-title">
            <h2>{article.title}</h2>
          </div>
          {/* <div className="card-description">
            <p>{article.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
