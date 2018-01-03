import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.scss';
import { Card, Icon, Image } from 'semantic-ui-react'
import PlayerCard from './components/playerCard';
import MonsterCard from './components/monsterCard';
import playerSamples from '../../sampleData/playerSamples';
import monsterSamples from '../../sampleData/monsterSamples';


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

      <div id='playerField'>
        {playerSamples.map((player) => {
          return (
              <Card className='cards' key={player.name}>
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
      </div>

      <div id='monsterField'>
        {monsterSamples.map((monster) => {
          return (
              <Card key={monster.name} className='cards'>
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
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));