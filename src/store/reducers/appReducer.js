import actionTypes from "../actions/actionTypes";

const initSate = {
  homeData: [],
  test: "hello",
};

const appReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};

export default appReducer;
