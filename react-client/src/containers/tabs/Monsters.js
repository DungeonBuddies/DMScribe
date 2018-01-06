import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddMonster from '../buttons/AddMonster';
import SearchBar from '../SearchBar';
import ClearMonsters from '../buttons/ClearMonsters';
import MonstersList from '../MonstersList';
////////////////////////////////////////////////////////////////////////////////////////
import $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////

class Monsters extends Component {
  


  ////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount () {
    this.getMonsterImg('ancient-gold-dragon');
  }

  getMonsterImg (monsterName) {
    $.get('http://localhost:3000/monsterimg', {monsterName: monsterName}, res => {
      console.log(res);
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////

  render () {
    if (this.props.currentTab !== 'Monsters') {
      return null;
    }

    return (
        <div>
          <SearchBar />
          <MonstersList />
          <AddMonster />
          <ClearMonsters />
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
