import React, { Component } from 'react';
import './Items.css';

class Items extends Component {
  renderItems(el) {
    let id = el.id;
    const text = el.text;
    const done = el.done;
    return (
      <div
        className={done ? 'items done' : 'items'}
        key={id}
      >
        <input
          className="checkbox"
          type="checkbox"
          key={id}
          id={`item${id}`}
          checked={done ? true : false}
          onChange={(e) => this.props.onChecked(e, id)} />
        <label htmlFor={`item${id}`}>
          {text}
        </label>
        <span
          role="button"
          className="delete"
          onClick={(e) => this.props.onDelete(e, id)}>
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
        {this.getFilterTodos().map(el => this.renderItems(el))}
      </div>
    );
  }
}

export default Items;