import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function PopUp() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Before Starting</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please, select your language top right</Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
