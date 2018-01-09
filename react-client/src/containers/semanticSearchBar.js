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

  handleChange (e, { value }) {
    this.setState({ value })
  }

  handleKeyPress (event) {

    if(event.key == 'Enter'){
      addMonster(this.state.value, this.state.checked);
      this.setState({value: ''})
    }
  } 

  onFocus () {
    this.setState({
      value: ''
    })
  }

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

  onBlur () {
    this.setState({
      value: ''
    })
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