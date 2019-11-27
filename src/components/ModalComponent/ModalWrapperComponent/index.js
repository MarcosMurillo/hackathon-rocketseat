import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalWrapperComponent({ id, show, children, handleClose }) {
  return (
    <Modal id={id} show={show} onHide={handleClose}>
      { children }
    </Modal>
  )
}