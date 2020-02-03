import tipsReducer from "./tipsReducerr";
import authReducer from "./authReducerss";
import { combineReducers } from "redux";
// import firestore redux
import { firestoreReducer } from "redux-firestore";
// import firebase redux
import {firebaseReducer} from "react-redux-firebase"
const rootReducer = combineReducers({
  tipsReducer: tipsReducer,
  authReducer: authReducer,
  firestoreReducer: firestoreReducer,
  firebaseReducer:firebaseReducer
});
export default rootReducer;
