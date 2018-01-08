import React, { Component } from 'react';
// import './style.scss';
import $ from 'jquery';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayersList from "../PlayersList"
import { addPlayer } from '../../actions/index';


class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};
		this.onPlayerFormSubmit = this.onPlayerFormSubmit.bind(this);
	}

	onPlayerFormSubmit (event) {
		event.preventDefault();
		var playerArr = $(event.target).serializeArray();
		console.log('Player object: ', playerArr)
		var resultsObj = {};
		for (var i = 0; i < playerArr.length; i++) {
		  resultsObj[playerArr[i].name] = playerArr[i].value;
		}
		addPlayer(resultsObj);
	}

	render () {

		if (this.props.currentTab !== 'Players') {
      return null;
    }

		return (
		<div>
			<form id="player-form" onSubmit={this.onPlayerFormSubmit}>
				Name:<br/>
				<input type="text" name="name"/><br/>
				Class:<br/>
				<input type="text" name="class"/><br/>
				AC:<br/>
				<input type="text" name="armor-class"/><br/>
				HP:<br/>
				<input type="text" name="hit-points"/><br/>
				Initiative:<br/>
				<input type="text" name="initiative"/><br/>
				PP:<br/>
				<input type="text" name="perception"/><br/>
				Speed:<br/>
				<input type="text" name="speed"/><br/>
				<span><button type="submit">Submit</button></span>
			</form>

				<PlayersList />
		</div>

			)
	}
}

function mapStateToProps (state) {
	return {
		players: state.players,
		currentTab: state.currentTab
	}
}

export default connect(mapStateToProps)(Players);





