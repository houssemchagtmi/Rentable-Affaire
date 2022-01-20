import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteClient,
  deleteSecretary,
  getLawyer,
} from "../../Redux/Actions/LawyerActions";
import { useParams } from "react-router";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
} from "react-bootstrap";
import AddSecButton from "./AddSecButton";
import AddClientButton from "./AddClientButton";
import "./SideBarLawyer.css";
import FilesModale from "./FilesModale";
import { LinkContainer } from "react-router-bootstrap";
const SideBarLawyer = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.getLawyer);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getLawyer(id));
  }, [dispatch]);

  return (
    <>
      <div className="containersidebar">
        {loading && "loading"}
        <div className="secretary">
          <AddSecButton />
          {user &&
            user.Lawyer.listOfSecretaries.map((el) => (
              <div>
                <div className="listesec">
                  <h1>
                    {" "}
                    {el.Firstname} {el.Lastname}{" "}
                  </h1>
                  <div className="dropdown dorpsec">
                    <div className="dropsecretray">
                    <DropdownButton as={ButtonGroup} variant="">
                      <Dropdown.Item eventKey="2">
                        <LinkContainer to={`/FilesModale/${el._id}`} className="li">
                          <Nav.Link>Add file</Nav.Link>
                        </LinkContainer>
                      </Dropdown.Item>

                      <Dropdown.Item eventKey="2">
                        <LinkContainer to="/Chat" className="li">
                          <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="3"
                        onClick={() => dispatch(deleteSecretary(el._id))}
                      >
                        {" "}
                        Remove{" "}
                      </Dropdown.Item>
                    </DropdownButton>
                    </div>
                  </div>
                </div>
                <p>{el.phone}</p>
              </div>
            ))}
        </div>
        <div className="client">
          <AddClientButton />

          {user &&
            user.Lawyer.listOfClients.map((el) => (
              <div>
                <div className="listeclient">
                  <h1>
                    {" "}
                    {el.Firstname} {el.Lastname}{" "}
                  </h1>
                  <div className="dropdown dorpcl">
                    <div className="dropclient">
                      <DropdownButton
                        as={ButtonGroup}
                        variant=""
                      >
                        <Dropdown.Item eventKey="1"> Add File </Dropdown.Item>
                        <Dropdown.Item eventKey="2"> Chat </Dropdown.Item>
                        <Dropdown.Item
                          eventKey="3"
                          onClick={() => 
                          dispatch(deleteClient(el._id))}
                        >
                          {" "}
                          Remove{" "}
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>
                <p>{el.phone}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBarLawyer;
