
import React, {useState } from "react";
import {Button, Modal, Form} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { updateLawyer } from "../../Redux/Actions/LawyerActions";
import { updateSecretary } from "../../Redux/Actions/SecretaryAction";

const Editbutton = ({id,idSec}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [cred, setCred] = useState()
    const handleshow = () => {

        setShow(!show)};
    
    const handleText =()=>{
        window.location.reload();

        dispatch(updateLawyer(id,cred))
        dispatch(updateSecretary(idSec,cred))
    }
    

    return (
        <>
            <Button style={{backgroundColor:'#40798c',border:'none'}} onClick={handleshow}>
                edit
            </Button>

            <Modal show={show} onHide={handleshow}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Edit desc..."  onChange={(e) => setCred({...cred, descreption:e.target.value}) } />
                </Form.Group>
            </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleText}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
           
        </>
    );
};

export default Editbutton;