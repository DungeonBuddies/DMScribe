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
import {selectTab, setUser, fetchGroups} from '../../actions/index';

const remote = 'https://png.icons8.com/ultraviolet/540/icosahedron.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login (event) {
    event.preventDefault();
    var user = $(event.target).serializeArray();
    var userObj = {
      username: user[0].value,
      password: user[1].value
    }
    $('#loginUsername').val('');
    $('#loginPassword').val('');
    $.post('/login', userObj)
    .then(() => {
      console.log(userObj.username);
      this.props.setUser(userObj.username);
      this.props.selectTab('Arena');
      this.props.fetchGroups(userObj.username);
    })
    .catch(() => {
      console.log('Wrong username and password');
    })
  }

  render() {
    const resizeMode = 'center';
    if (this.props.currentTab !== 'Login') {
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
                <Menu.Item>
                  <Button 
                  onClick={() => {this.props.selectTab('ForgotPW')}}
                  as='a' 
                  primary>Forgot password?</Button>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
          <Grid centered columns={6}>
            <Grid.Column>
              <form className="ui form signupForm" onSubmit={(event) => {this.login(event)}}>
                <div className="field">
                  <label>Username:</label>
                  <input type="text" name="username" id='loginUsername'/>
                </div>
                <div className="field">
                  <label>Password:</label>
                  <input type="password" name="password" id='loginPassword'/>
                </div>
                <span><button className="ui button" type="submit">Login!</button></span>
              </form>
            </Grid.Column>
          </Grid>
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
    setUser: setUser,
    fetchGroups: fetchGroups
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
