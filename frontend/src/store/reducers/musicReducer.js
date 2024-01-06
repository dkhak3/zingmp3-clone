import actionTypes from "../actions/actionTypes";

const initSate = {
  curSongId: null,
  isPlaying: false,
};

const musicReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.songId || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    default:
      return state;
  }
};

export default musicReducer;
