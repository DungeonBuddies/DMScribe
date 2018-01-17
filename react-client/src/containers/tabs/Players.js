import React, { Component } from 'react';
import '../../style.scss';
import $ from 'jquery';
import { Card, Icon, Image, Form, Button, Dropdown,Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayersList from "../PlayersList"
import { addPlayer, fetchClassImg } from '../../actions/index';
import ClearPlayers from '../buttons/ClearPlayers';
import GroupSelect from '../groupSelect';
import styles from 'styled-components';

const Wrapper = styles.div`
  margin: .7% 8%;
`;

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};
		this.onPlayerFormSubmit = this.onPlayerFormSubmit.bind(this);
		this.onPlayerSave = this.onPlayerSave.bind(this);
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

	onPlayerSave (event) {
		event.preventDefault();
		var playerArr = $(event.target).serializeArray();
		var resultsObj = {};
		for (var i = 0; i < playerArr.length; i++) {
		  resultsObj[playerArr[i].name] = playerArr[i].value;
		}
		resultsObj.dm = this.props.user;
		console.log(resultsObj);
		addPlayer(resultsObj);
		fetchClassImg(resultsObj.class)
		.then((res) => {
			resultsObj.image = res;
			$.post('/savePlayer', resultsObj)
		})
	}

	render () {
		if (this.props.currentTab !== 'Players') {
      return null;
    }
    
		return (
			<Wrapper>
			<div>
				<GroupSelect />
				<PlayersList />
				<div className="buttonsWrapper">
					<ClearPlayers className="buttonsWrapper"/>
				</div>
				<Grid centered columns={2}>
				  <Grid.Column>
						<form className="ui form" onSubmit={this.props.user ? this.onPlayerSave : this.onPlayerFormSubmit}>
							<div className="field">
								<label>Name:</label>
								<input type="text" name="name"/>
							</div>
							<div className="field">
								<label>Class:</label>
								<select className="ui fluid dropdown" name="class"> 
									<option value="">Class</option>
									<option value="Barbarian">Barbarian</option>
									<option value="Bard">Bard</option>
									<option value="Cleric">Cleric</option>
									<option value="Druid">Druid</option>
									<option value="Fighter">Fighter</option>
									<option value="Monk">Monk</option>
									<option value="Paladin">Paladin</option>
									<option value="Ranger">Ranger</option>
									<option value="Rogue">Rogue</option>
									<option value="Sorcerer">Sorcerer</option>
									<option value="Warlock">Warlock</option>
									<option value="Wizard">Wizard</option>
								</select>
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
							{this.props.user 
								?
									<div className="field">
										<label>Group Name</label>
										<input type="text" name="group"/>
									</div>
								: null

							}
							{this.props.user 
								?
									<span><button className="ui button" type="submit">Save and Submit</button></span>
								:
									<span><button className="ui button" type="submit">Submit</button></span>
							}
						</form>
					</Grid.Column>
				</Grid>
			</div>
			</Wrapper>
		);
	}
}

function mapStateToProps (state) {
	return {
		players: state.players,
		currentTab: state.currentTab,
		user: state.user
	}
}

export default connect(mapStateToProps)(Players);





