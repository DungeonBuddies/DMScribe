
const monstersReducer = (state = {}, action) => {
  // const initiative = Math.floor((monster.dexterity - 10) / 2);

  if (action.type === 'ADD_MONSTER') {
    const newPayload = action.payload;
    return {...state, [newPayload.id]: newPayload};
  }
  return state;
};

export default monstersReducer;
