import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import {addMonster} from '../actions/index';
import store from '../store';
import NumberDropDown from '../components/numberDropDown';

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      term: '',
      results: {},
      checked: false
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.clearMonsterDiv = this.clearMonsterDiv.bind(this);
  }

  onInputChange (event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit (event) {
    event.preventDefault();
    const results = this.searchMonsterUrls(this.state.term);
    this.setState(prevState => prevState.term.length > 0 ?
      {term: '', results: results} : {results: {}}
    );
  }

  searchMonsterUrls (query) {
    const monsterUrls = store.getState().monsterUrls;
    const results = {};
    // MVP linear search
    for (let k in monsterUrls) {
      const name = k.toLowerCase().split(' ');
      for (let w of name) {
        if (w.slice(0, query.length) === query) {
          results[k] = monsterUrls[k];
          break;
        }
      }
    }
    return results;
  };

  changeChecked () {
    this.setState({
      checked: !this.state.checked
    })
  }

  clearMonsterDiv () {
    this.setState({
      results: {},
    })
  }

  render () {
    return (
      <div>
        <form className='searchBar' onSubmit={this.onFormSubmit}>
          <span className="ui input">
            <input 
            type="text" 
            placeholder='Search for a monster'
            value={this.state.term}
            onChange={this.onInputChange}
            />
          </span>
          <span>
            <NumberDropDown />
          </span>
          <span>
            <Button className='customButton' type='submit' content='Submit'/>
          </span>
          <div className="ui checkbox">
            <input 
            type="checkbox" 
            readOnly="" 
            tabIndex="0"
            onClick={this.changeChecked} />
            <label>Auto-roll init for monsters</label>
          </div>
        </form>
        <div>
          {
            Object.keys(this.state.results).map(name => {
              return (
                <span
                  className='monsterSpan'
                  key={name}
                  onClick={() => {
                    addMonster(this.state.results[name], this.state.checked);
                    this.clearMonsterDiv();
                  }} 
                >{`${name}`}<Icon name='plus' /></span>
              )
            })
          }
        </div>
      </div>
      )
  }
}

export default SearchBar;
