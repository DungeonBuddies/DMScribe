
const currentTabReducer = (state = 'Landing', action) => {
  if (action.type === 'CHANGE_TAB') {
    return action.payload;
  }
  return state;
};

export default currentTabReducer;
