import React, { Component } from 'react';
import { connect } from 'react-redux';
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
} from 'semantic-ui-react'

const FixedMenu = () => (
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
)

const remote = 'https://png.icons8.com/ultraviolet/540/icosahedron.png';

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const resizeMode = 'center';
    return (

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
          <img id="landing-image" className="ui medium right floated image" src="https://png.icons8.com/ultraviolet/540/icosahedron.png"/>
        </Container>
      </div>
		)
	}
}

export default LandingPage;