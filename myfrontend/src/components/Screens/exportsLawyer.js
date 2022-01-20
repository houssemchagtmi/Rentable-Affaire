import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getLawyers } from "../../Redux/Actions/LawyerActions";
import "./logintest.css";


import {
  Alert,
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  Nav,
  Modal,
} from "react-bootstrap";
import { addNewLawyer } from "../../Redux/Actions/LawyerActions";
import { useNavigate } from "react-router";
import { login } from "../../Redux/Actions/LawyerActions";


export const GetLawyers = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getLawyers());
  }, [dispatch]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loading, user } = useSelector((state) => state.getLawyers);
  return (
    <div>
      {loading && "loading"}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1"> </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <FormControl
            type="search"
            placeholder="Search Lawyer"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
            className="search"
          />
        </Nav.Item>
      </Nav>
      {user &&
        user.allLawyers
          .filter(
            (el) =>
              el.Firstname.concat(" ")
                .concat(el.Lastname)
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              el.phone.toString().includes(search.toString())
          )
          .map((el) => (
            <>
              <div>
                <Button style={{backgroundColor:'#40798c',border:'none'}} onClick={handleShow}>
                  Show profile
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Profile Lawyer</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h1 className="names" >
                      Name:
                      {" "}
                      {el.Firstname} {el.Lastname}{" "}
                    </h1>
                    <p className="phone">Phone: {el.phone}</p>
                    <p className="address">address: {el.address}</p>
                    <p className="email">Email: {el.email}</p>
                  </Modal.Body>
            
                </Modal>
                <h1 className="names" style={{color:"white"}}>
                  {" "}
                  {el.Firstname} {el.Lastname}{" "}
                </h1>
                <p className="phone" style={{color:"white"}}>{el.phone}</p>
              </div>
            </>
          ))}
    </div>
  );
};


export const LoginLoyer = () => {
  let navigate = useNavigate();
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(cred));
  };
  const handleSignUp = () => {
    setShow(false);
    dispatch(addNewLawyer(cred));
  };
  const { users, user } = useSelector((state) => state.loginDetails);
  const [show, setShow] = useState(true);

  const { loading, message, error } = useSelector(
    (state) => state.addNewLawyer
  );
  useEffect(() => {
    if (user && user.Lawyer) {
      navigate(`/profile/${user.Lawyer._id}`);
    } else if (user && user.Secretary) {
      navigate(`/profileSec/${user.Secretary._id}`);
    }
    return;
  }, [user]);
  return (
    <>
      {loading && "loading"}
      {message && <p>{message.message}</p>}
      {error && (
        <Alert show={show} variant="danger">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>lawyer not created</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
      )}
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
          

            <div className="text">
              <span className="text-1">Your case wins</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
         
            <div className="text">
              <span className="text-1">
                Hours of your work,
                <br /> abbreviated in one click{" "}
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, password: e.target.value })
                      }
                    />
                  </div>

                  <DropdownButton title="who Are You" variant="Secondary">
                    <Dropdown.Item
                      onClick={(e) => setCred({ ...cred, role: "Lawyer" })}
                    >
                      Lawyer
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => setCred({ ...cred, role: "Secretary" })}
                    >
                      Secretary
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => setCred({ ...cred, role: "Client" })}
                    >
                      Client
                    </Dropdown.Item>
                  </DropdownButton>
                  <div className="button input-box">
                    <button onClick={handleSignIn}>log In</button>
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              {loading && "loading"}
              {message && <p>{message.message}</p>}
              {error && (
                <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>lawyer not created</p>
                </Alert>
              )}
              <div className="title">Signup</div>
              <form>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      placeholder="Enter your First name"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, Firstname: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      placeholder="Enter your Last name"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, Lastname: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="textarea"
                      placeholder="Enter your address"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, address: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="textarea"
                      placeholder="Enter your description"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, descreption: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      placeholder="Enter your zipcode"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, zipCode: e.target.value })
                      }
                    />
                  </div>

                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder=" password"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="confirme password"
                      required
                      onChange={(e) =>
                        setCred({ ...cred, confirmePassword: e.target.value })
                      }
                    />
                  </div>
                  <div className="button input-box">
                    <input
                      type="submit"
                      defaultValue="Sumbit"
                      onClick={handleSignUp}
                    />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
