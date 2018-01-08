const playersReducer = (state = [], action) => {
  if (action.type === 'ADD_PLAYER') {
    return [...state, action.payload];
  }
  return state;
};

export default playersReducer;
