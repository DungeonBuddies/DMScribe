import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(logger));

//////////////////////TEST///////////////////////
store.dispatch({type: 'ADD_MONSTER'});
//////////////////////TEST///////////////////////

export default store;
