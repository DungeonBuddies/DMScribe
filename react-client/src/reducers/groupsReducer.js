const groupsReducer = (state = [], action) => {
  if (action.type === 'SET_USER_GROUP') {
    return action.payload;
  } else if (action.type === 'LOGOUT_RESET') {
    return [];
  }
  return state;
};

export default groupsReducer;