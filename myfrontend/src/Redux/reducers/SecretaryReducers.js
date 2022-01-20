import { ADD_NEW_SECRETARY_FAIL, ADD_NEW_SECRETARY_REQUEST, ADD_NEW_SECRETARY_SUCCESS, DELETE_SECRETARY_FAIL, DELETE_SECRETARY_REQUEST, DELETE_SECRETARY_SUCCESS, GET_SECRETARY_FAIL, GET_SECRETARY_REQUEST, GET_SECRETARY_SUCCESS, UPDATE_SECRETARY_FAIL, UPDATE_SECRETARY_REQUEST, UPDATE_SECRETARY_SUCCESS } from "../Constatns/SecretaryConstants";



export const addNewSecretaryReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_SECRETARY_REQUEST:
            console.log('secretary request reducer')
            return{loading:true}
    case ADD_NEW_SECRETARY_SUCCESS:
        console.log("secretary response reducer")
        return {loading:false, message:action.payload}
        case ADD_NEW_SECRETARY_FAIL: 
        console.log("secretary fail reducer")
        return { loading: false, error: action.payload };
        default:
            return state;
            
    }
}
export const getSecretaryReducer=(state={},action)=>{
switch (action.type) {
    case GET_SECRETARY_REQUEST:
    console.log('req Secretary reducer')    
    return {loading: true}
        
    case GET_SECRETARY_SUCCESS:
        console.log('res sec red')
        return { loading : false, user: action.payload };
    case GET_SECRETARY_FAIL:
        return { loading: false, error: "server geted is down" };

    default:
        return state
        
}

}

export const updateSecretaryReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_SECRETARY_REQUEST:
        return { loading: true };
      case UPDATE_SECRETARY_SUCCESS:
        return { loading: false, user: action.payload };
  
      case UPDATE_SECRETARY_FAIL:
        return { loading: false, error: "server uptaded is down" };
      default:
        return state;
    }
  };
