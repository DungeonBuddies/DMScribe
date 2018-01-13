const groupsReducer = (state = [], action) => {
  if (action.type === 'SET_USER_GROUP') {
    return action.payload;
  } 
  return state;
};

export default groupsReducer;