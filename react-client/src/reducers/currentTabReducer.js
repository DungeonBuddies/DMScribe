
const currentTabReducer = (state = 'arena', action) => {
  if (action.type === 'CHANGE_TAB') {
    return action.payload;
  }
  return state;
};

export default currentTabReducer;
