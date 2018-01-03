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
      <h1>Hello World</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));