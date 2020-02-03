const initState = {
  data: []
};

const tipsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TIPS":
      // state.data = [...state.data, action.data];
      // return { ...state };
      return state;
      break;
    default:
      return state;

    // return { ...state };
    // break;
  }
};
export default tipsReducer;
