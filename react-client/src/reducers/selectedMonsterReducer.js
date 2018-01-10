const selectedMonsterReducer = (state = [], action) => {
  if (action.type === 'SELECT_MONSTER') {
    return [action.payload]
  } else if (action.type === 'REMOVE_SELECTED') {
    return action.payload
  }

  return state;
}

export default selectedMonsterReducer;