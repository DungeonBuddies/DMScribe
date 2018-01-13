import React, { Component } from 'react';
import $ from 'jquery';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectTab, setUser} from '../../actions/index';

const remote = 'https://png.icons8.com/ultraviolet/540/icosahedron.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  signUp (event) {
    event.preventDefault();
    var user = $(event.target).serializeArray();
    var userObj = {
      username: user[0].value,
      password: user[1].value
    }
    $('#signUpUsername').val('');
    $('#signUpPassword').val('');
    if (userObj.username === '' || userObj.password === '') {
      return;
    } else {
      $.post('/signUp', userObj)
      .then(() => {
        console.log(userObj.username);
        this.props.setUser(userObj.username);
        this.props.selectTab('Arena');
      })
    }
  }

  render() {
    const resizeMode = 'center';
    if (this.props.currentTab !== 'Signup') {
      return null;
    }

    return (
        <div>
          <Menu fixed='top' size='large'>
            <Container>
              <Menu.Menu position='right'>
                <Menu.Item className='item'>
                  <Button
                  onClick={() => {this.props.selectTab('Landing')}}
                  as='a'>Back to landing page</Button>
                </Menu.Item>
                <Menu.Item className='item'>
                  <Button 
                  onClick={() => {this.props.selectTab('Login')}}
                  as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button 
                  onClick={() => {this.props.selectTab('Signup')}}
                  as='a' 
                  primary>Sign Up</Button>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
          <form className="ui form signupForm" onSubmit={(event) => {this.signUp(event)}}>
            <div className="field">
              <label>Username:</label>
              <input type="text" name="username" id='signUpUsername'/>
            </div>
            <div className="field">
              <label>Password:</label>
              <input type="password" name="password" id='signUpPassword'/>
            </div>
            <span><button className="ui button" type="submit">Sign up!!</button></span>
          </form>
        </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    currentTab: state.currentTab
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    selectTab: selectTab,
    setUser: setUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);





