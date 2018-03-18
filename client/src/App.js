import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board'
import Instructions from './containers/Instructions'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="title">Battleship</h1>
        <Instructions />
        <Board />
      </div>
    );
  }
}

export default App;
