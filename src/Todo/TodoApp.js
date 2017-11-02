import React, { Component } from 'react';
import '../App.css';
import List from './List.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="Todo-app">
        <form onSubmit={this.onSubmit}>
          <span>Task</span>
          <input value={this.state.term} onChange={this.onChange} placeholder="What do you need to do?" />
          <button>Save Item</button>
        </form>
        <List items={this.state.items} />

        {/* How it works*/}
        <div className="grey">
          This state term: {this.state.term} <br /><br />
          This state items: {this.state.items}
        </div>

      </div>
    );
  }
}

export default TodoApp;
