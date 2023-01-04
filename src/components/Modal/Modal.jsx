import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from "./Modal.styled"

export class Modal extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    onModalClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalOnEsc);
  }

  closeModalOnEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onModalClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <Overlay className="overlay" onClick={this.handleBackDropClick}>
        <ModalWindow className="modal">
          <img src={image} alt="" />
        </ModalWindow>
      </Overlay>
    )
  }
}
