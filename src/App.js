import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './Todo/TodoApp.js';
import TodoApp2 from './Todo2/TodoApp2.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To do App</h1>
        </header>
        <div className="Todo-container">
          <h2>Simple todo list</h2>
          <TodoApp />
          <hr /><hr /><br />
          <h2>Todo app 2 (in lab) (Remove works!!)</h2>
          <TodoApp2 />
        </div>
      </div>
    );
  }
}

export default App;
