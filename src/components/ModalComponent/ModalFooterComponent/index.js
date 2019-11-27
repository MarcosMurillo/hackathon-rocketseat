import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function ModalFooterComponent({ confirmButton, cancelButton }) {
  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={(cancelButton && cancelButton.behaviour) || undefined}>
        { (cancelButton && cancelButton.text) || 'Fechar' }
      </Button>
      { confirmButton 
        ? <Button variant="primary" onClick={ confirmButton.behaviour || undefined }>
          { confirmButton.text || 'Confirmar' }
        </Button>
        : <></>
      }
    </Modal.Footer>
  )
}