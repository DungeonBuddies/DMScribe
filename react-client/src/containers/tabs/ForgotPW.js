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

class ForgotPW extends Component {
  constructor(props) {
    super(props);
    this.forgot = this.forgot.bind(this);
  }

  forgot (event) {
    event.preventDefault();
    var user = $(event.target).serializeArray();
    // console.log('user: ', user);
    var userObj = {
      username: user[0].value
    }
    $('#loginUsername').val('');
    $.get('/forgot', userObj)
    .then((data) => {
      console.log('data ', data);
    })
    .catch(() => {
      console.log('Wrong username');
    })
  }

  render() {
    const resizeMode = 'center';
    if (this.props.currentTab !== 'ForgotPW') {
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
              <form className="ui form signupForm" onSubmit={(event) => {this.forgot(event)}}>
                <div className="field">
                  <label>Username:</label>
                  <input type="text" name="username" id='loginUsername'/>
                </div>
                <span><button className="ui button" type="submit">Get new password</button></span>
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
    setUser: setUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPW);
