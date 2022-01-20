import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addNewClient } from "../../Redux/Actions/ClientActions";
import { getLawyer } from "../../Redux/Actions/LawyerActions";
import { getSecretary } from "../../Redux/Actions/SecretaryAction";



export const AddNewClient=()=>{
    const [cred, setCred] = useState({});
    const dispatch = useDispatch();
    const { id} = useParams();
    useEffect(() => {
      dispatch(getLawyer(id));
   
    }, [dispatch])
    const handleSignUp = () => {
      dispatch(addNewClient({...cred,id}));
    };
    const { loading, message, error } = useSelector(
      (state) => state.addNewClient
    );
    return (
      <div>
        {loading && "loading"}
        {message && <p>{message.message}</p>}
        {error && <h1>Client not created</h1>}
  
        <div className="wrapper">
          <h1 className="title">Registration Form</h1>
          <div className="form">
            <div className="inputfield">
              <label>First Name</label>
              <Form.Control
                type="text"
                className="input"
                onChange={(e) => setCred({ ...cred, Firstname: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Last Name</label>
              <Form.Control
                type="text"
                className="input"
                onChange={(e) => setCred({ ...cred, Lastname: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Password</label>
              <Form.Control
                type="password"
                className="input"
                onChange={(e) => setCred({ ...cred, password: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Confirm Password</label>
              <Form.Control
                type="password"
                className="input"
                onChange={(e) =>
                  setCred({ ...cred, confirmePassword: e.target.value })
                }
              />
            </div>
            <div className="inputfield">
              <label>Email Address</label>
              <Form.Control
                type="text"
                className="input"
                onChange={(e) => setCred({ ...cred, email: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Phone Number</label>
              <Form.Control
                type="text"
                className="input"
                onChange={(e) => setCred({ ...cred, phone: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Address</label>
              <Form.Control
                as="textarea"
                className="textarea"
                defaultValue={""}
                onChange={(e) => setCred({ ...cred, address: e.target.value })}
              />
            </div>
            <div className="inputfield">
              <label>Descreption</label>
              <Form.Control
                as="textarea"
                className="textarea"
                defaultValue={""}
                onChange={(e) =>
                  setCred({ ...cred, descreption: e.target.value })
                }
              />
            </div>
            <div className="inputfield">
              <label>cause</label>
              <Form.Control
              type="text"
                className="input"
                onChange={(e) =>
                  setCred({ ...cred, cause: e.target.value })
                }
              />
            </div>
            <div className="inputfield">
              <label>zipCode</label>
              <Form.Control
                type="text"
                className="input"
                onChange={(e) => setCred({ ...cred, zipCode: e.target.value })}
              />
            </div>
            
  
            <div className="inputfield">
              
              <Button
                variant="primary"
                type="submit"
                defaultValue="Register"
                className="btn"
                onClick={handleSignUp} id={id} 
              >
                Add Client
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}