import React, {Component} from 'react';
import $ from 'jquery';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {selectGroup} from '../actions/index';

class GroupSelect extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  // componentOnMount () {
  //   $.post('/getGroups', {dm: this.props.user})
  //   .then((groups) => {
  //     console.log(groups);
  //   })
  // }

  //This sets up the controlled searchbar. Whenever a person types it updates the set
  //and then sets the value of the searchbar based of this new state value
  handleChange (e, { value }) {
    this.setState({ value })
  }

  //This handles when the user presses Enter and submits the search to our data
  handleKeyPress (event) {
    if(event.key == 'Enter'){
      selectGroup(this.props.user, this.state.value);
      this.setState({value: ''})
    }
  } 

  //When focusing in (clicking the searchbar) this clears the search bar **MAYBE NOT NEEDED
  onFocus () {
    this.setState({
      value: ''
    })
  }

  //This allows the users to select a monster from the dropdown with a click and add it to the field
  onClose (e) {
    if (this.state.value === '') {
      return;
    } else {
      selectGroup(this.props.user, this.state.value);
      this.setState({
        value: ''
      })
    }
  }

  //When clicking away from the searchbar this clears the input
  onBlur () {
    this.setState({
      value: ''
    })
  }

  //This toggles the checked state VALUE of the checkbox, which is used to pass into the
  //addMonster Action function to decide whether to auto-roll for turn order of the monsters

  render () {
    return (
      <div>
        <Dropdown
        onSubmit={this.handleKeyPress}
        className='monsterDropdown'
        onClose={this.onClose}
        onFocus={this.onFocus}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        value={this.state.value}
        defaultSearchQuery=''
        placeholder='Gather Your Party!' 
        fluid search selection options={this.props.groups} 
        />
        {/*this hooks up the dropdown select options to our monster urls*/}
        {
        /*<span>
          <NumberDropDown />
        </span>*/
        }
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    groups: state.groups
  }
}

export default connect(mapStateToProps)(GroupSelect);
