import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
  renderItems(val) {
    let index = val.id;
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
          id={`item${index}`}
          checked={done ? true : false}
          onChange={(e) => this.props.onChecked(e, index)} />
        <label htmlFor={`item${index}`}>
          {text}
        </label>
        <span
          role="button"
          className="delete"
          onClick={(e) => this.props.onDelete(e, index)}>
          &times;
        </span>
      </div>
    )
  }
  getFilterTodos() {
    if (this.props.filter === 'All') {
      return this.props.todos;
    } else if (this.props.filter === 'Undo') {
      return this.props.todos.filter((el) => el.done === false);
    } else if (this.props.filter === 'Done') {
      return this.props.todos.filter((el) => el.done === true);
    }
  }
  render() {
    return (
      <div>
        {this.getFilterTodos().map((val) => this.renderItems(val))}
      </div>
    );
  }
}

export default Items;