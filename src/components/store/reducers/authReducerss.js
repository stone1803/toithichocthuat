const initState = {
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_OKE":
      return {
        ...state,
        error: action.null
      };
    case "LOGOUT":
      console.log("LOGOUT OKE");
      return state;

    case "LOGIN_ERR":
      return { ...state, error: "Login Fail " + action.error };
    case "REG":
      return {
        ...state,
        error: action.null
      };
    case "LOGIN_ERR":
      return {
        ...state,
        error: "REG ERROR " + action.error.code
      };
    default:
      return state;
      break;
  }
};
export default authReducer;
