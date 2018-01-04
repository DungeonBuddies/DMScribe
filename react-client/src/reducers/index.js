import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import playersReducer from './playersReducer.js';
import monsterUrlsReducer from './monsterUrlsReducer.js';

const reducer = combineReducers({
  monsters: monstersReducer,
  players: playersReducer,
  monsterUrls: monsterUrlsReducer
});

export default reducer;
