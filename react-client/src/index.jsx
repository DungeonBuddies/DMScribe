import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div>
      <div className="ui menu">
        <a className="item">Editorials</a>
        <a className="item">Reviews</a>
        <a className="item">Upcoming Events</a>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));