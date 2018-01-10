const selectedMonsterReducer = (state = [], action) => {
  if (action.type === 'SELECT_MONSTER') {
    return [action.payload]
  } else if (action.type === 'REMOVE_SELECTED') {

  }

  return state;
}

export default selectedMonsterReducer;