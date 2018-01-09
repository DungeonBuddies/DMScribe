import store from '../store';

const turnOrderReducer = (state = [], action) => {
  if (action.type === 'ORDER') {
    const players = store.getState().players;
    const monsters = store.getState().monsters;
    const sorted = monsters.concat(players).sort((a, b) => b.order > a.order);
    return sorted;
  } else if (action.type === 'CLEAR_ORDER') {
    return action.payload
  }
  return state;
};

export default turnOrderReducer;
