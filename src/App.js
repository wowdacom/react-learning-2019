import React from 'react';
// import logo from './logo.svg';
import { Board } from './components/Board.js'
import './App.css';

class App extends React.Component {

  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export { App };