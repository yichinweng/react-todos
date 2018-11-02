import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
  renderItems(index) {
    const text = this.props.todos[index].text;
    const done = this.props.todos[index].done;
    return (
      <div
        className={done ? 'items done' : 'items'}
        key={index}
      >
        <input
          className="checkbox"
          type="checkbox"
          key={index}
          checked={done ? true : false}
          onChange={(e) => this.props.onChecked(e, index)} />
        {text}
        <span
          role="button"
          className="delete"
          onClick={(e) => this.props.onDelete(e, index)}>
          &times;
        </span>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.todos.map((val, index) => this.renderItems(index))}
      </div>
    );
  }
}

export default Items;