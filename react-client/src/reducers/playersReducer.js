
const playersReducer = (state = [], action) => {
  if (action.payload === 'ADD_PLAYER') {
    return [... state, action.payload];
  }
  return state;
};

export default playersReducer;
