import { ADD_NEW_SECRETARY_FAIL, ADD_NEW_SECRETARY_REQUEST, ADD_NEW_SECRETARY_SUCCESS, DELETE_SECRETARY_FAIL, DELETE_SECRETARY_REQUEST, DELETE_SECRETARY_SUCCESS, GET_SECRETARY_FAIL, GET_SECRETARY_REQUEST, GET_SECRETARY_SUCCESS, UPDATE_SECRETARY_FAIL, UPDATE_SECRETARY_REQUEST, UPDATE_SECRETARY_SUCCESS } from "../Constatns/SecretaryConstants";
import axios from 'axios'

export const addNewSecretary = (newSecretary) => async (dispatch)=> {
try {
    dispatch({type:ADD_NEW_SECRETARY_REQUEST})
    const {data}= await axios.post(`http://localhost:4000/Secretary/:id/newSecretary`,newSecretary)
    dispatch({type:ADD_NEW_SECRETARY_SUCCESS, payload:data})
} catch (error) {
    dispatch({type:ADD_NEW_SECRETARY_FAIL})
}
}

export const getSecretary= (idSec)=>async (dispatch)=>{
try {
    dispatch({type:GET_SECRETARY_REQUEST})
    const{data}= await axios.get(`http://localhost:4000/Secretary/${idSec}`)
    dispatch({type:GET_SECRETARY_SUCCESS, payload:data})
} catch (error) {
    dispatch({type:GET_SECRETARY_FAIL})
}
}


export const updateSecretary = (idSec,newdesc) => async (dispatch,getState) => {
    try {
      dispatch({ type: UPDATE_SECRETARY_REQUEST });
      const {loginDetails:{user}}=getState()
      const config={headers:{auth:user.token}}
      const { data } = await axios.put(`http://localhost:4000/Secretary//${idSec}`,newdesc,config);
      dispatch({ type: UPDATE_SECRETARY_SUCCESS, payload: data });
    } catch (error) {
  
      dispatch({ type: UPDATE_SECRETARY_FAIL });
    }
  };



