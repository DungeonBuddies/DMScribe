import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import AddMonster from '../buttons/AddMonster';
import SearchBar from '../SearchBar';
import ClearMonsters from '../buttons/ClearMonsters';
import MonstersList from '../MonstersList';
import { addCustomMonster } from '../../actions/index';
import DropdownExampleSearchSelection from '../semanticSearchBar';

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
          <MonstersList />
          <AddMonster />
          <div className="buttonsWrapper">
            <ClearMonsters />
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
      )
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters,
    currentTab: state.currentTab
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    //whatever functions we need here
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Monsters);
