import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addNewLawyerReducer,
  deleteLawyerReducer,
  getLawyerReducer,
  getLawyersReducer,
  loginReducer,
  updateLawyerReducer,
  deleteSecretaryReducer,
  deleteClientReducer,
} from "./reducers/LawyerReducers";
import {
  addNewSecretaryReducer,
  getSecretaryReducer,
} from "./reducers/SecretaryReducers";
import { addNewClientReducer } from "./reducers/ClientReducers";

const reducer = combineReducers({
  //CRUD Lawyer:
  addNewLawyer: addNewLawyerReducer,
  getLawyers: getLawyersReducer,
  getLawyer: getLawyerReducer,
  updateLawyer: updateLawyerReducer,
  deleteLawyer: deleteLawyerReducer,
  deleteSecretary:deleteSecretaryReducer,

  //CRUD Secretary:
  addNewSecretary: addNewSecretaryReducer,
  getSecretary: getSecretaryReducer,



  //CRUD Client:
  addNewClient:addNewClientReducer,
  deleteClient:deleteClientReducer,


  //LOGIN
  loginDetails: loginReducer,
});

const fromLocalStorge = localStorage.getItem("cred")
  ? JSON.parse(localStorage.getItem("cred"))
  : null;

const initState = {
  loginDetails: { user: fromLocalStorge },
};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
