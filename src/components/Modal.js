import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <button onClick={closeModal} className="close-button">X</button>
      {children}
    </ReactModal>
  );
};

export default Modal;