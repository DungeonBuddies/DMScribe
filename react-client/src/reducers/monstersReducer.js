const monstersReducer = (state = [], action) => {
  if (action.type === 'ADD_MONSTER') {
    // var updated = action.payload.map((monster, index) => {
    //   monster._id.concat(index);
    //   return monster; 
    // })
    // console.log(updated)
    action.payload.id = action.payload._id.concat(state.length);
    return [...state, action.payload];

  } else if (action.type === 'DELETE_MONSTER') {
    const index = state.findIndex(monster => monster.id === action.payload.id);
    return [...state.slice(0, index), ...state.slice(index + 1)];

  } else if (action.type === 'ADD_MONSTER_IMG') {
    const index = state.findIndex(monster => monster.id === action.payload.id);
    return [...state.slice(0, index), {...state[index], image: action.payload.url}, ...state.slice(index + 1)];
  }
  return state;
};

export default monstersReducer;
