import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import {addMonster} from '../actions/index';
import { connect } from 'react-redux';
import NumberDropDown from '../components/numberDropDown';

class DropdownExampleSearchSelection extends Component {
  constructor () {
    super();
    this.state = {
      value: '',
      checked: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  //This sets up the controlled searchbar. Whenever a person types it updates the set
  //and then sets the value of the searchbar based of this new state value
  handleChange (e, { value }) {
    this.setState({ value })
  }

  //This handles when the user presses Enter and submits the search to our data
  handleKeyPress (event) {
    if(event.key == 'Enter'){
      addMonster(this.state.value, this.state.checked);
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
      addMonster(this.state.value, this.state.checked);
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
  changeChecked () {
    this.setState({
      checked: !this.state.checked
    })
  }

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
        placeholder='Select Monster' 
        fluid search selection options={this.props.monsterUrls} 
        />
        {/*this hooks up the dropdown select options to our monster urls*/}
        {
        /*<span>
          <NumberDropDown />
        </span>*/
        }
        <div className="ui checkbox ourCheckbox">
          <input 
          type="checkbox" 
          defaultChecked={true}
          readOnly="" 
          tabIndex="0"
          onClick={this.changeChecked} />
          <label>Auto-roll turn order for monsters</label>
        </div>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    monsterUrls: state.monsterUrls
  }
}

export default connect(mapStateToProps)(DropdownExampleSearchSelection);
