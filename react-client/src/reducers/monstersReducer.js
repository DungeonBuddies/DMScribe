const monstersReducer = (state = [], action) => {
  if (action.type === 'ADD_MONSTER') {
    return [...state, action.payload];

  } else if (action.type === 'DELETE_MONSTER') {
    const index = state.findIndex(monster => monster.name === action.payload.name);
    return [...state.slice(0, index), ...state.slice(index + 1)];

  } else if (action.type === 'ADD_MONSTER_IMG') {
    const index = state.findIndex(monster => monster._id === action.payload.id);
    return [...state.slice(0, index), ...state.slice(index + 1), {...state[index], image: action.payload.url}];
  }
  return state;
};

export default monstersReducer;
