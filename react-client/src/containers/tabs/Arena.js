import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayersList from '../PlayersList';
import MonstersList from '../MonstersList';
import OrderButton from '../buttons/OrderButton';
import AddMonster from '../buttons/AddMonster';
import ClearMonsters from '../buttons/ClearMonsters';
import SearchBar from '../SearchBar';


class Arena extends Component {
  render () {
    if (this.props.currentTab !== 'Arena') {
      return null;
    }

    return (
        <div>
          <SearchBar />
          <PlayersList />
          <MonstersList />
          <AddMonster />
          <div className="buttonsWrapper">
            <OrderButton />
            <ClearMonsters />
          </div>
        </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters,
    players: state.players,
    currentTab: state.currentTab
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    //whatever functions we need here
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Arena);
