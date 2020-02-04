export const actionTip = data => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // async database
    const profile = getState().firebaseReducer.profile;
    const authorID = getState().firebaseReducer.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("tips")
      .add({
        ...data,
        authorFullName: profile.firstName + "  " + profile.lastName,
        authorID: authorID,
        createDay: new Date()
      })
      .then(() => {
        dispatch({ type: "ADD_TIPS", data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
