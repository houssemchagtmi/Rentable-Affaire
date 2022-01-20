import {
  ADD_NEW_LAWYER_FAIL,
  ADD_NEW_LAWYER_REQUEST,
  ADD_NEW_LAWYER_SUCCESS,
  DELETE_LAWYER_FAIL,
  DELETE_LAWYER_REQUEST,
  DELETE_LAWYER_SUCCESS,
  GET_LAWYERS_FAIL,
  GET_LAWYERS_REQUEST,
  GET_LAWYERS_SUCCESS,
  GET_LAWYER_FAIL,
  GET_LAWYER_REQUEST,
  GET_LAWYER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOUGOUT,
  UPDATE_LAWYER_FAIL,
  UPDATE_LAWYER_REQUEST,
  UPDATE_LAWYER_SUCCESS,
} from "../Constatns/LawyerConstants";
import axios from "axios";
import { DELETE_SECRETARY_FAIL, DELETE_SECRETARY_REQUEST, DELETE_SECRETARY_SUCCESS } from "../Constatns/SecretaryConstants";
import { DELETE_CLIENT_FAIL, DELETE_CLIENT_REQUEST, DELETE_CLIENT_SUCCESS } from "../Constatns/ClientConstatnts";

export const getLawyers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LAWYERS_REQUEST });
    const { data } = await axios.get("http://localhost:4000/Lawyer");
    dispatch({ type: GET_LAWYERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_LAWYERS_FAIL });
  }
};
export const getLawyer = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_LAWYER_REQUEST });
    const { data } = await axios.get(`http://localhost:4000/Lawyer/${id}`);
    dispatch({ type: GET_LAWYER_SUCCESS, payload: data });
  } catch (error) {

    dispatch({ type: GET_LAWYER_FAIL });
  }
};

export const addNewLawyer = (newLawyer) => async (dispatch) => {
  try {
    dispatch({ type: ADD_NEW_LAWYER_REQUEST });
    const { data } = await axios.post(
      "http://localhost:4000/Lawyer/newLawyer",
      newLawyer
    );
   
    dispatch({ type: ADD_NEW_LAWYER_SUCCESS, payload: data });

  } catch (error) {
    
    dispatch({ type: ADD_NEW_LAWYER_FAIL});
  }
};

export const updateLawyer = (id,newdesc) => async (dispatch,getState) => {
  try {
    dispatch({ type: UPDATE_LAWYER_REQUEST });
    const {loginDetails:{user}}=getState()
    const config={headers:{auth:user.token}}
    const { data } = await axios.put(`http://localhost:4000/Lawyer/${id}`,newdesc,config);
    dispatch({ type: UPDATE_LAWYER_SUCCESS, payload: data });
  } catch (error) {

    dispatch({ type: UPDATE_LAWYER_FAIL });
  }
};

export const deleteLawyer = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: DELETE_LAWYER_REQUEST });
    const {loginDetails:{user}}=getState()
    const config={headers:{auth:user.token}}
    const { data } = await axios.delete(`http://localhost:4000/Lawyer/${id}`,config);
    localStorage.removeItem("cred")

    dispatch({ type: DELETE_LAWYER_SUCCESS, payload: data });
  } catch (error) {

    dispatch({ type: DELETE_LAWYER_FAIL });
  }
};


export const deleteSecretary=(idSec)=>async (dispatch,getState)=>{
  try {
      dispatch({type: DELETE_SECRETARY_REQUEST })
      const {loginDetails:{user}}=getState()
      const {data}= await axios.delete(`http://localhost:4000/Secretary/${idSec}`)
      dispatch({type:DELETE_SECRETARY_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:DELETE_SECRETARY_FAIL})
      
  }
}
export const deleteClient=(idCl)=>async (dispatch,getState)=>{
  try {
      dispatch({type: DELETE_CLIENT_REQUEST })
      const {loginDetails:{user}}=getState()
      const {data}= await axios.delete(`http://localhost:4000/Client/${idCl}`)
      dispatch({type:DELETE_CLIENT_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:DELETE_CLIENT_FAIL})
      
  }
}




export const login = (userCred) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      `http://localhost:4000/${userCred.role}/login`,
      userCred
    );
    localStorage.setItem("cred", JSON.stringify(data));
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: "bad cred" });
  }
};

export const lougout = () => (dispatch) => {
  dispatch({ type: LOUGOUT });
  localStorage.removeItem("cred");
};

