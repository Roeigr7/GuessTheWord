const initialState = {
  level: 1,
  life: 3,
};
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        level: 1,
        life: 3,
      };
    case 'LEVEL_UP':
      return {
        ...state,
        level: state.level + 1,
      };
    case 'WRONG_GUESS':
      return {
        ...state,
        life: state.life - 1,
      };

    default:
      return state;
  }
};

export default gameReducer;
