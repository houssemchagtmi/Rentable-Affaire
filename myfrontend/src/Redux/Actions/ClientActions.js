import axios from 'axios'
import { ADD_NEW_CLIENT_FAIL, ADD_NEW_CLIENT_REQUEST, ADD_NEW_CLIENT_SUCCESS, DELETE_CLIENT_REQUEST } from '../Constatns/ClientConstatnts'

export const addNewClient = (newCLient) => async (dispatch)=> {
try {
    dispatch({type:ADD_NEW_CLIENT_REQUEST})
    const {data}= await axios.post(`http://localhost:4000/Client/:id/newClient`,newCLient)

    dispatch({type:ADD_NEW_CLIENT_SUCCESS, payload:data,})
} catch (error) {
    dispatch({type:ADD_NEW_CLIENT_FAIL})
}
};
