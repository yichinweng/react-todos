import React, { Component } from 'react';
import './TodoFooter.css';

const buttonList = ['All', 'Undo', 'Done'];
class TodoFooter extends Component {
  render() {
    return (
      <div className="todo-footer">
        {`${this.props.todos.filter(val => val.done === true).length}/${this.props.todos.length}`}
      </div>
    );
  }
}

export default TodoFooter;
