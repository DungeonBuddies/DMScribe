import React, { Component } from 'react';
import '../../style.scss';
import $ from 'jquery';
import { Card, Icon, Image, Form, Button } from 'semantic-ui-react';
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
			<form className="ui form" onSubmit={this.onPlayerFormSubmit}>
				<div className="field">
					<label>Name:</label>
					<input type="text" name="name"/>
				</div>
				<div className="field">
					<label>Class:</label>
					<input type="text" name="class"/>
				</div>
				<div className="field">
					<label>AC:</label>
					<input type="text" name="armor_class"/>
				</div>
				<div className="field">
					<label>HP:</label>
					<input type="text" name="hit_points"/>
				</div>
				<div className="field">
					<label>Initiative</label>
					<input type="text" name="init"/>
				</div>
				<div className="field">
					<label>PP:</label>
					<input type="text" name="perception"/>
				</div>
				<div className="field">
					<label>Speed</label>
					<input type="text" name="speed"/>
				</div>
				<span><button className="ui button" type="submit">Submit</button></span>
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





