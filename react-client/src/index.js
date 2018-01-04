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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: []
    }
  }

  componentDidMount () {
    this.setState({
      order: (playerSamples.concat(monsterSamples))
      .sort((a, b) => (b.init - a.init))
      
    })
  }

  render () {
    return (
    <div>
      <div className="ui menu">
        <a className="item tab">Arena</a>
        <a className="item tab">Players</a>
        <a className="item tab">Monsters</a>
      </div>

      <div id='playerField'>
        <Card.Group>
        {playerSamples.map((player, index) => {
          return (
              <Card className='cards' key={`${player.name}${index}`}>
                  <Image />
                  <Card.Content>
                    <Card.Header>
                      {player.name}
                    </Card.Header>
                    <Card.Meta>
                      <span className='date'>
                        Class/Race
                      </span>
                    </Card.Meta>
                    <Card.Description>
                        <p className='stats'>
                          <span className='stat'>AC: {player.armor_class}</span>
                          <span className='stat'>HP: {player.hit_points}</span>
                          <span className='stat'>INIT: {player.init}</span>
                        </p>
                        <p className='stats'>
                          <span className='stat'>PP: {player.perception}</span>
                          <span className='stat'>SPD: {player.speed}</span>
                        </p>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='address card outline' />
                      More player info
                    </a>
                  </Card.Content>
                </Card>

            )
        })}
        </Card.Group>
      </div>

      <div id='monsterField'>
        <Card.Group>
        {monsterSamples.map((monster, index) => {
          return (
              <Card key={`${monster.name}${index}`} className='cards'>
                <Image />
                <Card.Content>
                  <Card.Header>
                    {monster.name}
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      Class/Race
                    </span>
                  </Card.Meta>
                  <Card.Description>
                      <p className='stats'>
                        <span className='stat'>AC: {monster.armor_class}</span>
                        <span className='stat'>HP: {monster.hit_points}</span>
                        <span className='stat'>INIT: {monster.init}</span>
                      </p>
                      <p className='stats'>
                        <span className='stat'>STR: {monster.perception}</span>
                        <span className='stat'>DEX: {monster.dexterity}</span>
                        <span className='stat'>CON: {monster.constitution}</span>
                      </p>
                      <p className='stats'>
                        <span className='stat'>WIS: {monster.wisdom}</span>
                        <span className='stat'>CHA: {monster.charisma}</span>
                      </p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='address card outline' />
                    More monster info
                  </a>
                </Card.Content>
              </Card>
            )
        })}
        </Card.Group>
      </div>

    <div id='orderField'>
      <Card.Group>  
        {this.state.order.map((card, index) => {
          return (
              <Card className='orderCards' key={`${card.name}${index}`}>
                <Image />
                <Card.Content>
                  <Card.Header>
                    {card.name}
                  </Card.Header>
                  <Card.Meta>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className='date turn'>
                    {index + 1}
                  </div>
                  <a>
                    <Icon name='address card outline' />
                    Drag Me! 
                  </a>
                </Card.Content>
              </Card>
            )
        })}
      </Card.Group>
    </div>

    </div>)
  }
}

ReactDOM.render((
  <Provider store={store} >
    <App />
  </Provider>
), document.getElementById('app'));
