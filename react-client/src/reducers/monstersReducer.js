
const monstersReducer = (state = [], action) => {
  // const initiative = Math.floor((monster.dexterity - 10) / 2);

  if (action.type === 'ADD_MONSTER') {
    return [...state, action.payload];
  }
  return state;
};

export default monstersReducer;
