import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import actions from './actions/index';
import './style.scss';
import Players from './containers/tabs/Players';
import Arena from './containers/tabs/Arena';
import Monsters from './containers/tabs/Monsters';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
      actions.populateMonsterUrls();
    }

  render () {
    return (
      <div>
        <Menu />
        <Arena />
        <Players />
        <Monsters />
      </div>
    )
  }
}


ReactDOM.render((
  <Provider store={store} >
    <App />
  </Provider>
), document.getElementById('app'));
