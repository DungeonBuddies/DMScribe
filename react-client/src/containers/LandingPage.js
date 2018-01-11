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

const remote = 'https://png.icons8.com/ultraviolet/540/icosahedron.png';

class LandingPage extends Component {
	constructor(props) {
		super(props);
    this.state = {
      page: 'landing'
    }
	}

	render() {
    const resizeMode = 'center';

    if (this.state.page === 'landing') {
  		return (

        <div>
          <div className="ui grid">
            <Menu fixed='top' size='large'>
              <Container>
                <Menu.Menu position='right'>
                  <Menu.Item className='item'>
                    <Button as='a'>Log in</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button as='a' primary>Sign Up</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>

            <Container>
              <Header
                as='h1'
                content='DM-Scribe'
                inverted
                style={{ backgroundColor: 'transparent', fontSize: '4em', fontWeight: 'normal', color:'#1b1c1d', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='The handy tool for the unorganized DM'
                inverted
                style={{ backgroundColor: 'transparent', fontSize: '1.7em', color:'#1b1c1d', fontWeight: 'normal' }}
              />
              <Button primary size='huge' onClick={this.props.clickToArena}>
                Roll for Initiative!
                <Icon name='right arrow'/>
              </Button>
              <img id="landing-image" className="ui large right floated image" src="https://png.icons8.com/ultraviolet/540/icosahedron.png"/>
            </Container>
          </div>
          <Menu fixed='top' size='large'>
            <Container>
              <Menu.Menu position='right'>
                <Menu.Item className='item'>
                  <Button
                  onClick={() => {this.setState({page: 'login'})}}
                  as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button 
                  as='a' 
                  onClick={() => {this.setState({page: 'signup'})}}
                  primary>Sign Up</Button>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>

        </div>
  		) 
    } else if (this.state.page === 'signup') {
      return (
          <div>
            <Menu fixed='top' size='large'>
              <Container>
                <Menu.Menu position='right'>
                  <Menu.Item className='item'>
                    <Button
                    onClick={() => {this.setState({page: 'landing'})}}
                    as='a'>Back to landing page</Button>
                  </Menu.Item>
                  <Menu.Item className='item'>
                    <Button 
                    onClick={() => {this.setState({page: 'login'})}}
                    as='a'>Log in</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button 
                    as='a' 
                    onClick={() => {this.setState({page: 'signup'})}}
                    primary>Sign Up</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
            <form className="ui form signupForm">
              <div className="field">
                <label>Username:</label>
                <input type="text" name="username"/>
              </div>
              <div className="field">
                <label>Password:</label>
                <input type="password" name="password"/>
              </div>
              <span><button className="ui button" type="submit">Sign up!</button></span>
            </form>
          </div>
        )
    } else if (this.state.page === 'login') {
        return (
            <div>
              <Menu fixed='top' size='large'>
                <Container>
                  <Menu.Menu position='right'>
                    <Menu.Item className='item'>
                      <Button
                      onClick={() => {this.setState({page: 'landing'})}}
                      as='a'>Back to landing page</Button>
                    </Menu.Item>
                    <Menu.Item className='item'>
                      <Button 
                      onClick={() => {this.setState({page: 'login'})}}
                      as='a'>Log in</Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button 
                      as='a' 
                      onClick={() => {this.setState({page: 'signup'})}}
                      primary>Sign Up</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
              <form className="ui form signupForm">
                <div className="field">
                  <label>Username:</label>
                  <input type="text" name="username"/>
                </div>
                <div className="field">
                  <label>Password:</label>
                  <input type="password" name="password"/>
                </div>
                <span><button className="ui button" type="submit">Login!</button></span>
              </form>
            </div>
          )
    }
	}
}

export default LandingPage;