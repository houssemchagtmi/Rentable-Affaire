import { ADD_NEW_CLIENT_FAIL, ADD_NEW_CLIENT_REQUEST, ADD_NEW_CLIENT_SUCCESS } from "../Constatns/ClientConstatnts"



export const addNewClientReducer=(state={},action)=>{
    switch (action.type) {
        case ADD_NEW_CLIENT_REQUEST:
            return{loading:true}
    case ADD_NEW_CLIENT_SUCCESS:
        return {loading:false, message:action.payload}
        case ADD_NEW_CLIENT_FAIL: 
        return { loading: false };
        default:
            return state;
            
    }
}