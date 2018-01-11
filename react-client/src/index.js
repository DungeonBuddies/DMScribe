import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import './style.scss';
import { Card, Icon, Image } from 'semantic-ui-react'
import {populateMonsterUrls} from './actions/index';
import Players from './containers/tabs/Players';
import Arena from './containers/tabs/Arena';
import Monsters from './containers/tabs/Monsters';
import Menu from './containers/Menu';
import LandingPage from './containers/LandingPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.clickToArena = this.clickToArena.bind(this);
  }

  componentDidMount () {
      populateMonsterUrls();
    }

  clickToArena() {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true
      })
    }
  }

  render () {
    if (this.state.clicked === true) {
      return (
        <div>
          <Menu />
          <Arena />
          <Players />
          <Monsters />
        </div>
      )
    } else {
      return (
        <LandingPage clickToArena={this.clickToArena}/>
      )
    }
  }
}


ReactDOM.render((
  <Provider store={store} >
    <App />
  </Provider>
), document.getElementById('app'));
