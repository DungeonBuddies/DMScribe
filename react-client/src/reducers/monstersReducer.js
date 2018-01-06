const monstersReducer = (state = [], action) => {
  if (action.type === 'ADD_MONSTER') {
    return [...state, action.payload];
  } else if (action.type === 'DELETE_MONSTER') {
      return action.payload;
  }
  return state;
};

export default monstersReducer;
