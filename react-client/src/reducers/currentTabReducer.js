import CHANGE_TAB from '../actions/index';

const currentTabReducer = (state = 'Arena', action) => {
  if (action.type === 'CHANGE_TAB') {
    return action.payload;
  }
  return state;
};

export default currentTabReducer;
