import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import './style.scss';
import { Card, Icon, Image } from 'semantic-ui-react'
import PlayerCard from './components/playerCard';
import MonsterCard from './components/monsterCard';
import playerSamples from '../../sampleData/playerSamples';
import monsterSamples from '../../sampleData/monsterSamples';
import {populateMonsterUrls} from './actions/index';
import Players from './containers/tabs/Players';
import Arena from './containers/tabs/Arena';
import Monsters from './containers/tabs/Monsters';
import Menu from './containers/Menu';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
      populateMonsterUrls();
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
