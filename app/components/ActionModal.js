import React, { PropTypes } from 'react'
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
import Calculator from '../components/Calculator';

function ActionModal (props) {
    return (
      <Modal isOpen={props.show} onRequestHide={props.onClose}>
        <ModalHeader>
          <ModalClose onClick={props.onClose}/>
          <ModalTitle>{props.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>{props.content}</p>
          <Calculator/>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={props.onClose}>
            Close
          </button>
          <button className='btn btn-primary' onClick={props.onSubmit}>
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    )
}

ActionModal.propTypes = {
    onSubmit : PropTypes.func.isRequired,
    onClose : PropTypes.func,
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    show : PropTypes.bool.isRequired
}

export default ActionModal
