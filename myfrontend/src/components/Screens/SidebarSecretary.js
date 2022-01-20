import React, { useEffect } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { deleteClient } from "../../Redux/Actions/LawyerActions";
import { getSecretary } from "../../Redux/Actions/SecretaryAction";
import AddClientButton from "./AddClientButton";

const SidebarSecretary = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.getSecretary);
  const { idSec } = useParams();
  useEffect(() => {
    dispatch(getSecretary(idSec));
  }, [dispatch]);
  return (
    <div>
         <LinkContainer to="/Chat" className="li">
                          <Nav.Link> <Button> Chat with Lawyer </Button></Nav.Link>
                        </LinkContainer>
      <AddClientButton />

      {user &&
        user.Secretary.listOfClients.map((el) => (
          <div>
            <div className="listeclient">
              <h1>
                {" "}
                {el.Firstname} {el.Lastname}{" "}
              </h1>
              <div className="dropdown dorpcl">
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="bg-vertical-dropdown-2"
                >
                  <Dropdown.Item eventKey="1"> Add File </Dropdown.Item>
                  <Dropdown.Item eventKey="2"> Chat </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => dispatch(deleteClient(el._id))}
                  >
                    {" "}
                    Remove{" "}
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <p>{el.phone}</p>
          </div>
        ))}
    </div>
  );
};

export default SidebarSecretary;
