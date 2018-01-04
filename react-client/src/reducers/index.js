import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import playersReducer from './playersReducer';
import monsterUrlsReducer from './monsterUrlsReducer';
import currentTabReducer from './currentTabReducer';

const reducer = combineReducers({
  monsters: monstersReducer,
  players: playersReducer,
  monsterUrls: monsterUrlsReducer,
  currentTab: currentTabReducer,
  turnOrder: turnOrderReducer
});

export default reducer;
