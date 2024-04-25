import React, { useState } from 'react';
import Modal from './Modal';
function Header({props}) {
  console.log()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="header">
   <p>{props.modal_bar_content} <button className="modalcta" onClick={openModal}>{props.modal_bar_cta}</button></p>

     
      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        <p>{props.modal_content}</p>
      </Modal>

    </div>
  );
}
export default Header;