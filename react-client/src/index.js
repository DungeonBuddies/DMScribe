import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <div className="ui menu">
        <a className="item tab">Arena</a>
        <a className="item tab">Players</a>
        <a className="item tab">Monsters</a>
      </div>
    </div>)
  }
}

ReactDOM.render((
  <Provider store={store} >
    <App />
  </Provider>
), document.getElementById('app'));
