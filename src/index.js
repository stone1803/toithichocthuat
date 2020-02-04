import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// config redux - redux-thunk
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./components/store/reducers/rootReducer";
import thunk from "redux-thunk";
// config firebase
import firebase from "./config/fbConfig";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded
} from "react-redux-firebase";
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebaseReducer.auth);
  if (!isLoaded(auth))
    return (
      <div className="container text-center">
        <h1>VẠN PHẬT TÙY TÂM</h1>
      </div>
    );
  return children;
}

const middleWare = [thunk.withExtraArgument({ getFirestore, getFirebase })];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWare), reduxFirestore(firebase))
);
// cho store o tren moi chay vi cap store truoc sau do moi config firebase get database
const rrfConfig = {
  userProfile: "user",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  //enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
