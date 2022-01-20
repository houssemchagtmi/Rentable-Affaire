import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSecretary } from '../../Redux/Actions/LawyerActions';

const RemoveSecButton = () => {
    const { user } = useSelector((state) => state.loginDetails);
    const dispatch = useDispatch();

    return (
        <div>
             <Dropdown.Item eventKey="3" onClick={() => dispatch(deleteSecretary(user.Lawyer.listOfSecretaries._idSec))}> Remove </Dropdown.Item>
        </div>
    )
}

export default RemoveSecButton

