import React, { Component } from 'react';
import './TodoFooter.css';

const buttonList = ['All', 'Undo', 'Done'];
class TodoFooter extends Component {
  renderButton(el, index) {
    return (
      <button
        key={index}
        className={this.props.filter === el ? 'active' : ''}
        onClick={() => this.props.onFilterClick(el)}>
        {el}
      </button>
    );
  }
  render() {
    return (
      <div className="todo-footer">
        {buttonList.map((el, index) => this.renderButton(el, index))}
        <button>Clear Done</button>
        <p>
          {`${this.props.todos.filter(val => val.done === true).length}/${this.props.todos.length}`}
        </p>
      </div>
    );
  }
}

export default TodoFooter;
