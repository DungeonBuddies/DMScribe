import React, { Component } from 'react';
import './style.scss';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayersList from "../PlayersList"


class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onPlayerFormSubmit (event) {
		event.preventDefault();
		
	}

	render () {
		return (
			<form onSubmit={this.onPlayerFormSubmit}>
				Name:<br>
				<input type="text" name="name"><br>
				Class:<br>
				<input type="text" name="class"><br>
				AC:<br>
				<input type="text" name="armor-class"><br>
				HP:<br>
				<input type="text" name="hit-points"><br>
				Initiative:<br>
				<input type="text" name="initiative"><br>
				PP:<br>
				<input type="text" name="perception"><br>
				Speed:<br>
				<input type="text" name="speed"><br>
				<span><button type="submit">Submit</button></span>
			</form>

			<div>
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



