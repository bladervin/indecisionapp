import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose = {props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={400}
    className="modal"
    >
      <h2 className="modal__title">Please do this task!</h2>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>Close</button>    
    </Modal>
);

export default OptionModal;