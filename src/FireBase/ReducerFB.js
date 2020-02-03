import { combineReducers } from "redux";
import { reducer as firebase } from "react-redux-firebase";

const rootReducerFB = combineReducers({
  firebase
});

export default rootReducerFB;
