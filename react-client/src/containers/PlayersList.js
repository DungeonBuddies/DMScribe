import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePlayer, generateTurnOrder, assignTurnValue } from '../actions/index';

class PlayersList extends Component {
  constructor(props) {
  	super(props);
  }

  //This function trigger the redux Action that updates the turn value
  //on the specified player card and rerenders the player card and turn order
  //when the user tabs away or moves focus
  handleOnBlur(e) {
    assignTurnValue(e.target.id, e.target.value);
  }

  //this function does the same as above but with the enter key rather than changing focus
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      assignTurnValue(e.target.id, e.target.value);
    }
  }

  render () {
  	if (this.props.players.length === 0) {
  		return null;
  	}

  	return(
  		<div id='playerField'>
  			<Card.Group>
          {/*this function maps over the redux store property players array
          and formats the data into a card that is rendered to the page*/}
  				{this.props.players.map((player, index) => {
  					return (
  						<Card key={`${player.name}${index}`}>
						    <div className='classImgContainer'>
                   <Image className='classImg' src={player.image}/>
                </div>
						    <Card.Content>
						      <Card.Header>
						        {player.name}
						      </Card.Header>
                  {/*this function removes the specified player from the redux
                  store player array and regenerates the turn order*/}
						      <Icon
                    onClick={() => {
                      this.props.removePlayer(player.name);
                      this.props.generateTurnOrder();
                    }} 
                    className='deletePlayerIcon' 
                    color='red' 
                    name='remove'/>
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
                        <span
                          className='stat'
                        >
                          Turn:  
                          <input
                            id={player.name}
                            className='initInput'
                            type='number'
                            placeholder='?'
                            onBlur={this.handleOnBlur}
                            onKeyUp={this.handleKeyUp}
                          />
                        </span>
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
  	);
  }
}

//Maps the specified redux store property to be available here on the props object
function mapStateToProps (state) {
  return {
    players: state.players
  }
}

//Maps the specified redux Action to be available here on the props object
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ removePlayer, generateTurnOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

