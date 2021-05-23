const initialState = {
  users: [
    {
      name: 'exampleUser',
      phone: '0549149898',
      score: '7',
    },
  ],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        users: [
          ...state.users,
          {
            name: action.payload.details.name,
            phone: action.payload.details.phone,
            score: action.payload.level,
          },
        ],
      };
    default:
      return state;
  }
};

export default userReducer;
