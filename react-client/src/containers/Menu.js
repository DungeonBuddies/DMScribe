import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectTab, setUser, logoutReset} from '../actions/index';

var tabs = ['Arena', 'Players', 'Monsters'];

class Menu extends Component {
  render () {
    if (this.props.currentTab === 'Landing' 
      || this.props.currentTab === 'Login'
      || this.props.currentTab === 'Signup') {
      return null;
    }

  	return(
      <div className='menuBar'>
        {this.props.user 
          ?
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
              className='item tabLog'>
              {this.props.user}
              </a>
              <a
                onClick={() => {
                  this.props.setUser('');
                  this.props.logoutReset();
                  this.props.selectTab('Landing');
                }}
                className="item tabSignUp"
              >Log out!</a>
            </div>  
          :
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
        }
      </div>
		);
  }
}

function mapStateToProps (state) {
  return {
    currentTab: state.currentTab,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectTab: selectTab,
    setUser: setUser,
    logoutReset: logoutReset
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
