import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMonster } from '../actions/index';

class PlayersList extends Component {
  render () {
  	if (this.props.players.length) {
  		return null;
  	}

  	return(
  		<div>
  			<Card.Group>
  				{this.props.players.map((player, index) => {
  					return (
  						<Card>
						    <Image />
						    <Card.Content>
						      <Card.Header>
						        {player.name}
						      </Card.Header>
						      <Card.Meta>
						        <span className='date'>
						          {`Class: ${player.class}`}
						        </span>
						      </Card.Meta>
						      <Card.Description>
						          <p className='stats'>
						            <span className='stat'>AC: {player.armor_class}</span>
						            <span className='stat'>HP: {player.hit_points}</span>
						            <span className='stat'>INIT: {player.init}</span>
						          </p>
						          <p className='stats'>
						            <span className='stat'>PP: {player.perception}</span>
						            <span className='stat'>SPD: {player.speed}</span>
						          </p>
						      </Card.Description>
						    </Card.Content>
						    <Card.Content extra>
						      <a>
						        <Icon name='address card outline' />
						        More player info
						      </a>
						    </Card.Content>
						  </Card>
  					)
  				})}
  			</Card.Group>
  		</div>
  		)
  }
}

function mapStateToProps (state) {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(PlayersList);

