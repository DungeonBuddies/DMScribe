import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddMonster from '../buttons/AddMonster';
import SearchBar from '../SearchBar';
import ClearMonsters from '../buttons/ClearMonsters';
import MonstersList from '../MonstersList';

class Monsters extends Component {
  render () {
    if (this.props.currentTab !== 'Monsters') {
      return null;
    }

    return (
        <div>
          <MonstersList />
          <SearchBar />
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
