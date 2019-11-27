import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalBodyComponent({ children }) {
  return (
    <Modal.Body>
      { children }
    </Modal.Body>
  )
}