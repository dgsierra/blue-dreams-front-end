import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function openModal() {
  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => invokeModal(!false);
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Booking
      </Button>
      <Modal show={isShow} onHide={initModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you`&apos`re reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={initModal}>
            Close
          </Button>
          <Button variant="primary" onClick={initModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default openModal;
