import actionTypes from "../actions/actionTypes";

const initSate = {
  banner: [],
};

const appReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            ?.items || null,
      };

    default:
      return state;
  }
};

export default appReducer;
