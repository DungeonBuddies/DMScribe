const monstersReducer = (state = [], action) => {
  if (action.type === 'ADD_MONSTER') {
    return [...state, action.payload];
  } else if (action.type === 'DELETE_MONSTER') {
      const index = state.findIndex(monster => monster.name === action.payload.name);
      return [...state.slice(0, index), ...state.slice(index + 1)];
  }
  return state;
};

export default monstersReducer;
