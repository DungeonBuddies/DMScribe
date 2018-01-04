import React, { Component } from 'react';
// import './style.scss';
import $ from 'jquery';
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
		$("player-form").submit(function(event) {
			console.log($(this).serializeArray());
		})
	}

	render () {

		if (this.props.currentTab !== 'players') {
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





