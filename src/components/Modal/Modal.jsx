import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled"

export const Modal = ({ image, onModalClose }) => {

  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.code === 'Escape') {
        onModalClose('');
      }
    };
    window.addEventListener('keydown', closeModalOnEsc);
    return () => {
      window.removeEventListener('keydown', closeModalOnEsc);
    };
  }, [onModalClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleBackdropClick}>
      <ModalWindow className="modal">
        <img src={image} alt="" />
      </ModalWindow>
    </Overlay>
  )
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

