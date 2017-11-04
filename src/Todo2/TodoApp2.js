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
    if(this.state.term !== '') {
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    } else {
      console.log('Plz. type some text');
    }
  }

  completeItemHandler = (obj) => {
    obj.target.className = (obj.target.className === "complete") ? "not-complete" : "complete";
    console.log('[Item id ' + obj.target.id + '] ' + obj.target.className );
  }

  removeItemHandler = (obj) => {
    //console.log('Remove item id : ' + obj.target.id);

    // Current Items on State
    let items = this.state.items;
    //console.log('State (before splice) : ' + items);

    // Remove item By object-id
    let spliceItem = items.splice(obj.target.id, 1);
    console.log('Remove : ' + spliceItem);

    // Set State After remove item
    //console.log('State (after splice) : ' + items);
    this.setState({items: [...items]});

    //console.log('-----------------------------------------------------------');
  }

  render() {
    const items = this.state.items;

    /*let styles = {
      complete: {
        textDecoration: "line-through"
      },
      notComplete: {
        textDecoration: "none"
      },
    }*/

    return (
      <div className="Todo-app">

        <form onSubmit={this.onSubmit}>
          <span>Task</span>
          <input value={this.state.term} onChange={this.onChange} placeholder="What do you need to do?" maxLength="15" />
          <button>Save Item</button>
        </form>

        <div className="List">
          <ul>
            { items.map((item, index) =>
              <li key={index} id={index}>
                <span className="txt">{item}</span>
                <button id={index} className="not-complete" onClick={this.completeItemHandler}>/</button>
                <button id={index} onClick={this.removeItemHandler}>X</button>
              </li>
            ) }
          </ul>
        </div>

        {/* How it works
        <div className="grey">
          This state term: {this.state.term} <br /><br />
          This state items: {this.state.items}
        </div>*/}

      </div>
    );
  }
}

export default TodoApp2;
