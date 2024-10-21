import React from 'react';
 
const Modal = ({ box, closeModal }) => {
  return (
    <div className="modalOverlay" onClick={closeModal}>
      <div className="modalContent"  onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={closeModal}>X</button>
        {(!box.image) && <p>Image not found</p>}
        <img src={box.image} alt="" />
        <h2>{box.title}</h2>
        <p>{box.description}</p>
      </div>
    </div>
  );
};

export default Modal;
