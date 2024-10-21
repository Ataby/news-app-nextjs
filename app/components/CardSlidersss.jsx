import React, { useContext } from 'react'
import { MyContext } from '../context/FilterContext'
import Modal from "./Modal"


const CardSlidersss = ({ newsData }) => {
  const {isModalOpen,selectedBox,setIsModalOpen,setSelectedBox}=useContext(MyContext);
  const openModal = (box) => {
    setSelectedBox(box);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBox(null);
  };

  return (
    <div className="whole-page">
      <div className="latest">
        <h3>Latest News</h3>
      </div>
      {newsData.map((article, index) => (
        <div className="A" key={index} onClick={()=> openModal(article)} >
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
      {isModalOpen && (
        <Modal box={selectedBox} closeModal={closeModal} />
      )}
    </div>
  );
};

export default CardSlidersss;
