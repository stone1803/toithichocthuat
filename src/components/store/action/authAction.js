export const actionsignIn = cer => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(cer.email, cer.password)
      .then(() => {
        dispatch({ type: "LOGIN_OKE", cer });
      })
      .catch(error => {
        dispatch({ type: "LOGIN_ERR", error });
      });
  };
};
export const actionsignOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: "LOGOUT" });
    });
  };
};
