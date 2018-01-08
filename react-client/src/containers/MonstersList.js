import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMonster } from '../actions/index';


class MonstersList extends Component {
 
  render () {
    if (this.props.monsters.length === 0) {
      return null;
    }

  	return(
      <div id='monsterField'>
        <Card.Group>
      		{this.props.monsters.map((monster, index) => {
                  return (
                      <Card key={index} className='cards'>
                        <div>
                          <Image className='imgContainer' src={monster.image}/>
                        </div>
                        <Card.Content>
                          <Card.Header>
                            {monster.name} 
                          </Card.Header>
                          <Card.Meta>
                            <span className='date'>
                            </span>
                          </Card.Meta>
                          <Card.Description>
                              <p className='stats'>
                                <span className='stat'>AC: {monster.armor_class}</span>
                                <span className='stat'>HP: {monster.hit_points}</span>
                                <span className='stat'>INIT: {monster.init ? monster.init : <input placeholder='?' className='initInput stat'/>}</span>
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
                          <Icon
                          onClick={() => {this.props.removeMonster(monster.id)}} 
                          className='deleteMonsterIcon' 
                          color='red' 
                          name='remove'/>
                        </Card.Content>
                      </Card>
                    )
                })}
        </Card.Group>
      </div>
  		)
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ removeMonster }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonstersList);




