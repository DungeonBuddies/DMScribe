import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {clearPlayersField, clearOrderField} from '../../actions/index';

class ClearPlayers extends Component {
  render () {
    if (this.props.players.length === 0) {
      return null;
    }

  	return(
  		<div>
        <Button
        onClick={() => {
          clearPlayersField();
          clearOrderField();
        }} 
        className='clearPlayers' 
        content='Clear players'/>
      </div> 
  		)
  }
}

function mapStateToProps (state) {
  return {
    players: state.players
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ clearPlayersField, clearOrderField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearPlayers);