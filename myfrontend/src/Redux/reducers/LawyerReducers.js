import { DELETE_CLIENT_FAIL, DELETE_CLIENT_REQUEST, DELETE_CLIENT_SUCCESS } from "../Constatns/ClientConstatnts";
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
import { DELETE_SECRETARY_FAIL, DELETE_SECRETARY_REQUEST, DELETE_SECRETARY_SUCCESS } from "../Constatns/SecretaryConstants";

export const getLawyersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LAWYERS_REQUEST:
      return { loading: true };
    case GET_LAWYERS_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_LAWYERS_FAIL:
      return { loading: false, error: "server is down" };

    default:
      return state;
  }
};
export const getLawyerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LAWYER_REQUEST:

      return { loading: true };
    case GET_LAWYER_SUCCESS:

      return { loading: false, user: action.payload };

    case GET_LAWYER_FAIL:
      return { loading: false, error: "server geted is down" };

    default:
      return state;
  }
};

export const addNewLawyerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_LAWYER_REQUEST:

      return { loading: true };

    case ADD_NEW_LAWYER_SUCCESS:

      return { loading: false, message: action.payload };
    case ADD_NEW_LAWYER_FAIL:

      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateLawyerReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LAWYER_REQUEST:
      return { loading: true };
    case UPDATE_LAWYER_SUCCESS:
      return { loading: false, user: action.payload };

    case UPDATE_LAWYER_FAIL:
      return { loading: false, error: "server uptaded is down" };
    default:
      return state;
  }
};

export const deleteLawyerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LAWYER_REQUEST:
      return { loading: true };
    case DELETE_LAWYER_SUCCESS:
      return { loading: false, deleteuser: action.payload };
    case DELETE_LAWYER_FAIL:
      return { loading: false, error: "server DELETED is down" };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { laoding: false, user: action.payload };
    case LOGIN_FAIL:
      return { loading: false, message: action.payload };
    case LOUGOUT:
      return {};
    default:
      return state;
  }
};

// delete sec

export const deleteSecretaryReducer=(state ={},action )=>{
  switch (action.type) {
      case DELETE_SECRETARY_REQUEST:
          return {loading:true}
      case DELETE_SECRETARY_SUCCESS:
          return {loading:false, deleteSecretary:action.payload}
      case DELETE_SECRETARY_FAIL:
      return { loading:false,error:"server Deleted sec is down"}    
      default:
          return state;
  }
}
// delete client 

export const deleteClientReducer=(state ={},action )=>{
  switch (action.type) {
      case DELETE_CLIENT_REQUEST:
          return {loading:true}
      case DELETE_CLIENT_SUCCESS:
          return {loading:false, deleteClient:action.payload}
      case DELETE_CLIENT_FAIL:
      return { loading:false,error:"server Deleted sec is down"}    
      default:
          return state;
  }
}