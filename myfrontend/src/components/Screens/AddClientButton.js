import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AddNewClient } from "./exportsClient";

const AddClientButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Button style={{backgroundColor:'#40798c',border:'none', margin:'10px'}} variant="primary" onClick={handleShow}>
        Add Client
      </Button>

      <Modal show={show} onHide={handleClose}>
      <AddNewClient/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddClientButton;
