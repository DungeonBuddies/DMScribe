import store from '../store';
const turnOrderReducer = (state = [], action) => {
  if (action.type === 'ORDER') {
    //NONE OF THIS BULLSHIT WORKS FOR WHATEVER REASON
    var players = store.getState().players;
    var monsters = store.getState().monsters;
    console.log('PLAYERS: ', players);
    console.log('MONSTERS: ', monsters);
    var sorted = monsters.sort((a, b) => {b.order - a.order});
    console.log('SORTED: ', sorted);
    return sorted;
  } 
  return state;
};

export default turnOrderReducer;
