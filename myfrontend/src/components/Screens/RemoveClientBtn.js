import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClient } from '../../Redux/Actions/LawyerActions';

const RemoveClientBtn = () => {
    const { user } = useSelector((state) => state.loginDetails);
    const dispatch = useDispatch();

    return (

        <div>
             <Dropdown.Item eventKey="3" onClick={() => dispatch(deleteClient(user.Lawyer.listOfClients._idCl))}> Remove </Dropdown.Item>

        </div>
    )
}

export default RemoveClientBtn
