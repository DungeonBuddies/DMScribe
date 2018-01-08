import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';
// import ReduxPromise from 'redux-promise';


const store = createStore(reducer, applyMiddleware(logger/*, ReduxPromise*/));

export default store;
