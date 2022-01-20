import React, { useEffect, useState } from "react";
import { Alert, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteLawyer } from "../../Redux/Actions/LawyerActions";
import { GetOnlyTheLawyer } from "./GetOnlyTheLawyer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProfileLawyer = () => {
    const { user } = useSelector((state) => state.loginDetails);
    const [show, setShow] = useState(true);
  
    const dispatch = useDispatch();
    useEffect(() => {
      if (!user) {
        Navigate(`/login`);
      }
    }, []);
  return (
    <div>
      <GetOnlyTheLawyer />

      <Button style={{backgroundColor:'#40798c',border:'none'}} onClick={() => setShow(false)}>Delete Account</Button>

      <Alert show={!show} variant="success">
        <Alert.Heading>Are you sure?!</Alert.Heading>
        <p>we are sad because you left we</p>
        <hr />
        <div className="d-flex justify-content-end">
          {!show && (
            <Button onClick={() => setShow(true)} variant="outline-success">
              No i'm not leaving you!
            </Button>
          )}
          <LinkContainer to={"/login"}>
            <Nav.Link onClick={() => dispatch(deleteLawyer(user.Lawyer._id))}>
              Delete Acount
            </Nav.Link>
          </LinkContainer>
        </div>
      </Alert>
    </div>
  );
};

export default ProfileLawyer;
