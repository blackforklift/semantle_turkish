import React from 'react';
import '../styles/Modal.css';

function Modal({ open, handleClose, title, content }) {
  return (
    <div className={`modal ${open ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={handleClose}>Close</button>
      </div>
      
    </div>
  );
}

export default Modal;
