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
