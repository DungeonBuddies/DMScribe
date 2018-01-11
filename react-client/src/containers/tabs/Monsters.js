import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import ClearMonsters from '../buttons/ClearMonsters';
import MonstersList from '../MonstersList';
import { addCustomMonster, clearSelectedMonster } from '../../actions/index';
import DropdownExampleSearchSelection from '../SearchBar';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Monsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
    this.onMonsterFormSubmit = this.onMonsterFormSubmit.bind(this)
  }

  onMonsterFormSubmit (event) {
    event.preventDefault();
    var monsterArr = $(event.target).serializeArray();
    var resultsObj = {};
    for (var i = 0; i < monsterArr.length; i++) {
      resultsObj[monsterArr[i].name] = monsterArr[i].value;
    }
    addCustomMonster(resultsObj);
  }

  render () {
    if (this.props.currentTab !== 'Monsters') {
      return null;
    }

    return (
      <div>
        <DropdownExampleSearchSelection />
        <Card.Group>
          {this.props.selectedMonster.length === 0 
            ? null
            : this.props.selectedMonster.map((monster, index) => {
                return (
                    <Card key={index} id='selectedMonster' className='cards'>
                      <div className='monsterImgContainer'>
                        <Image className='monsterImg' src={monster.image}/>
                      </div>
                      <Card.Content>
                        <Card.Header>
                          {monster.name} 
                          <span id='clearSelectedMonster'>
                            {monster.actions 
                              ?
                                <Button
                                onClick={() => {
                                  this.props.clearSelectedMonster();
                                }}
                                className='removeMonsterSelected' 
                                content='Done'/>
                              :
                                <Button
                                onClick={() => {
                                  this.props.clearSelectedMonster();
                                }}
                                className='removeMonsterSelectedNoActions' 
                                content='Done'/>
                            }
                        </span>
                        </Card.Header>
                        <Card.Meta>
                          <div className='date'>
                            {`Alignment: ${monster.alignment}`}
                          </div>
                          <div>
                            {`Languages: ${monster.languages}`}
                          </div>
                        </Card.Meta>
                        <Card.Description>
                            {monster.actions 
                              ?
                                <div className='actionsDiv'> <strong>Actions: </strong><br/>
                                  {monster.actions.map((action) => {
                                    return <div className='actionSkill' key={action.name}>
                                              <p><strong>Name: </strong>{action.name}</p> 
                                              {action.attack_bonus ? <p><strong>Attack bonus: </strong>{action.attack_bonus}</p> : null}
                                              {action.damage_bonus ? <p><strong>Damage bonus: </strong>{action.damage_bonus}</p> : null}
                                              {action.damage_dice ? <p><strong>Damage dice: </strong>{action.damage_dice}</p> : null}
                                              <p> <strong>Description: </strong>{action.desc}</p>
                                           </div>
                                  })}
                                </div>
                              : null
                            }
                            <p className='selectedStats'>
                              <span className='selectedStat'><strong>AC:</strong> {monster.armor_class}</span>
                              <span className='selectedStat'><strong>HP:</strong> {monster.hit_points}</span>
                              <span className='selectedStat'><strong>INIT:</strong> {monster.init}</span>
                              <span className='selectedStat'><strong>STR:</strong> {monster.strength}</span>
                            </p>
                            <p className='selectedStats'>
                              <span className='selectedStat'><strong>DEX:</strong> {monster.dexterity}</span>
                              <span className='selectedStat'><strong>CON:</strong> {monster.constitution}</span>
                              <span className='selectedStat'><strong>WIS:</strong> {monster.wisdom}</span>
                              <span className='selectedStat'><strong>CHA:</strong> {monster.charisma}</span>
                            </p>
                            <p className='selectedStats'>
                            </p>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <span><strong>Senses: </strong>{monster.senses}</span>
                      </Card.Content>
                    </Card>
                  )
              })}
        </Card.Group>
        <MonstersList />
        <div className="buttonsWrapper">
          <ClearMonsters className="buttonsWrapper"/>
        </div>
        <form className="ui form monsterFormButton" onSubmit={this.onMonsterFormSubmit}>
          <div className="field">
            <label>Name:</label>
            <input type="text" name="name"/>
          </div>
          <div className="field">
            <label>AC:</label>
            <input type="text" name="armor_class"/>
          </div>
          <div className="field">
            <label>HP:</label>
            <input type="text" name="hit_points"/>
          </div>
          <div className="field">
            <label>INIT:</label>
            <input type="text" name="init"/>
          </div>
          <div className="field">
            <label>Strength:</label>
            <input type="text" name="strength"/>
          </div>
          <div className="field">
            <label>Dexterity:</label>
            <input type="text" name="dexterity"/>
          </div>
          <div className="field">
            <label>Constitution:</label>
            <input type="text" name="constitution"/>
          </div>
          <div className="field">
            <label>Wisdom:</label>
            <input type="text" name="wisdom"/>
          </div>
          <div className="field">
            <label>Charisma:</label>
            <input type="text" name="charisma"/>
          </div>
          <div className="field">
            <label>Image:</label>
            <input type="text" name="image"/>
          </div>
          <span><button className="ui button" type="submit">Submit</button></span>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters,
    currentTab: state.currentTab,
    selectedMonster: state.selectedMonster
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({clearSelectedMonster}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
