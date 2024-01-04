import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './components/Container';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Container/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
