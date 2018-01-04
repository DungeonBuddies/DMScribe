import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import playersReducer from './playersReducer.js';
import monsterIdsReducer from './monsterIdsReducer.js';

const reducer = combineReducers({
  monsters: monstersReducer,
  players: playersReducer,
  monsterIds: monsterIdsReducer
});

export default reducer;
