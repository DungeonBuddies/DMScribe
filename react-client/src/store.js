import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer, {});

store.subscribe(() => {
  console.log('Store has changed: ', store.getState());
});

export default store;
