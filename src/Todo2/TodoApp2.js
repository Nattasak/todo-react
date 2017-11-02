import React, { Component } from 'react';
import '../App.css';

class TodoApp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
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
      </div>
    );
  }
}

export default TodoApp2;
