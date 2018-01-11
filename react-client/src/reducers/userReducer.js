const userReducer = (state = '', action) => {
  if (action.type === 'CHANGE_USER') {
    return action.payload;
  }
  return state;
};

export default userReducer;