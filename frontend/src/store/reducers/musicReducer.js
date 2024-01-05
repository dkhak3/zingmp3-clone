import actionTypes from "../actions/actionTypes";

const initSate = {
  curSongId: null,
};

const musicReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.songId || null,
      };
    default:
      return state;
  }
};

export default musicReducer;
