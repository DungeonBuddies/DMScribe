import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {clearMonstersField} from '../../actions/index';

class ClearMonsters extends Component {
  render () {
    if (this.props.monsters.length === 0) {
      return null;
    }

  	return(
  		<div className='orderDiv'>
        <Button
        onClick={() => {
          clearMonstersField();
        }} 
        className='clearMonsters' 
        content='Clear monsters'/>
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
  return bindActionCreators({ clearMonstersField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearMonsters);