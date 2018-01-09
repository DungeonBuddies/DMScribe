import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { generateTurnOrder } from '../../actions/index';

class OrderButton extends Component {
  render () {
    if (this.props.monsters.length === 0) {
      return null;
    }

  	return(
  		<div>
        <Button onClick={this.props.generateTurnOrder} content='Generate turn order' />  
      </div>
  	);
  }
}

function mapStateToProps (state) {
  return {
    monsters: state.monsters
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ generateTurnOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
