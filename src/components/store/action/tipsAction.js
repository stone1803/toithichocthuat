export const actionTip = data => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // async database

    const firestore = getFirestore();
    firestore
      .collection("tips")
      .add({
        ...data
      })
      .then(() => {
        dispatch({ type: "ADD_TIPS", data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
