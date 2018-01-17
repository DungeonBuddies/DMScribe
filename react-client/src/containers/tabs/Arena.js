import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayersList from '../PlayersList';
import MonstersList from '../MonstersList';
import OrderList from '../orderList';
import OrderButton from '../buttons/OrderButton';
import ClearMonsters from '../buttons/ClearMonsters';
import DropdownExampleSearchSelection from '../SearchBar';
import styles from 'styled-components';

const Wrapper = styles.div`
  margin: .7% 8%;
`;



class Arena extends Component {
  render () {
    if (this.props.currentTab !== 'Arena') {
      return null;
    }

    return (
      <Wrapper>
      <div>
        <DropdownExampleSearchSelection />
        <OrderList />
        <PlayersList />
        <MonstersList />
        <div className="buttonsWrapper">
          {/* <OrderButton /> */}
          <ClearMonsters />
        </div>
      </div>
      </Wrapper>
    );
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Arena);
