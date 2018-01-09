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
      checked: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
  }

  handleChange (e, { value }) {
    this.setState({ value })
  }

  handleKeyPress (event) {
    if(event.key == 'Enter'){
      addMonster(this.state.value, true);
      this.setState({value: ''})
    }
  } 

  changeChecked () {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    return (
      <div>
        <Dropdown
        className='monsterDropdown'
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        value={this.state.value} 
        placeholder='Select Monster' 
        fluid search selection options={this.props.monsterUrls} 
        />
        <span>
          <NumberDropDown />
        </span>
        <div className="ui checkbox ourCheckbox">
          <input 
          type="checkbox" 
          defaultChecked={true}
          readOnly="" 
          tabIndex="0"
          onClick={this.changeChecked} />
          <label>Auto-roll init for monsters</label>
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