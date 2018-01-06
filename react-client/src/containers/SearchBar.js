import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import {addMonster} from '../actions/index';
import store from '../store';

class SearchBar extends Component {
  constructor () {
    super();
    this.state = {
      term: '',
      results: {}
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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
            <Button className='customButton' type='submit' content='Submit'/>
          </span>

        </form>
        <div>
          {
            Object.keys(this.state.results).map(name => {
              return (
                <span
                  className='monsterSpan'
                  key={name}
                  onClick={() => addMonster(this.state.results[name])} 
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
