import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import playersReducer from './playersReducer.js';

const reducer = combineReducers({
  monsters: monstersReducer,
  players: playersReducer,
});

export default reducer;
