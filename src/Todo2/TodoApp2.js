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

  doneItemHandler = () => {
    console.log('Done!!!');
  }

  removeItemHandler = (obj) => {
    console.log('Remove to-do id : ' + obj.target.id);

    // Current State (items)
    let items = this.state.items;
    console.log('State (before splice) : ' + items);

    // Splice item By object-id
    let spliceItem = items.splice(obj.target.id, 1);
    console.log('Splice : ' + spliceItem);

    // SET State After splice
    console.log('State (after splice) : ' + items);
    this.setState({items: [...items]});

    console.log('-----------------------------------------------------------');
  }

  render() {
    const items = this.state.items;

    return (
      <div className="Todo-app">

        <form onSubmit={this.onSubmit}>
          <span>Task</span>
          <input value={this.state.term} onChange={this.onChange} placeholder="What do you need to do?" />
          <button>Save Item</button>
        </form>

        <div className="List">
          <ul>
            { items.map((item, index) =>
              <li key={index} id={index}>
                <span className="txt">{item}</span>
                <button onClick={this.doneItemHandler}>/</button>
                <button id={index} onClick={this.removeItemHandler}>X</button>
              </li>
            ) }
          </ul>
        </div>

        {/* How it works*/}
        <div className="grey">
          This state term: {this.state.term} <br /><br />
          This state items: {this.state.items}
        </div>

      </div>
    );
  }
}

export default TodoApp2;
