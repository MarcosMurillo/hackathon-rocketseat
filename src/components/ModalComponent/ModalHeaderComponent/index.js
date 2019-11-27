import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ModalHeaderComponent({ title }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{ title }</Modal.Title>
    </Modal.Header>
  )
}