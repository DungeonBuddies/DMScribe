import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectTab} from '../actions/index';

var tabs = ['Arena', 'Players', 'Monsters'];

class Menu extends Component {
  render () {
  	return(
      <div className="ui menu">
        {tabs.map((tab) => {
          return (
            <a
              key={tab} 
              onClick={() => {this.props.selectTab(tab)}}
              className="item tab" 
              value={tab}
            >{tab}</a>
          );
        })}
        <a 
          onClick={() => {this.props.selectTab('Login')}}
          className="item tabLog" 
        >Login</a>
        <a
          onClick={() => {this.props.selectTab('Signup')}}
          className="item tabSignUp"

        >Sign up</a>
      </div>  
		);
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectTab: selectTab
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Menu);
