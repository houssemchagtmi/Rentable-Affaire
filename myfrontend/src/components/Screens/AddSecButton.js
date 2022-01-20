import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AddNewSecretary } from "./exportsSecretary";

const AddSecButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button style={{backgroundColor:'#40798c',border:'none', margin:'10px'}} onClick={handleShow}>
        Add Secretary
      </Button>

      <Modal show={show} onHide={handleClose}>
        <AddNewSecretary />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddSecButton;
