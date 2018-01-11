import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container text>
        <Header
          as='h1'
          content='DM-Scribe'
          inverted
          style={{ fontSize: '4em', fontWeight: 'normal', color:'#1b1c1d', marginBottom: 0, marginTop: '3em' }}
        />
        <Header
          as='h2'
          content='The handy tool for the unorganized DM'
          inverted
          style={{ fontSize: '1.7em', color:'#1b1c1d', fontWeight: 'normal' }}
        />
        <Button primary size='huge' onClick={this.props.clickToArena}>
          Roll for Initiative!
          <Icon name='right arrow' />
        </Button>
      </Container>
		)
	}
}

export default LandingPage;