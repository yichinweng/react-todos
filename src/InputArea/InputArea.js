import React, { Component } from 'react';
import './InputArea.css';

class InputArea extends Component {
  render() {
    return (
      <div>
        <span
          className="check-all"
          onClick={this.props.onCheckAll}>
          ☑
        </span>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Somthing need to be done?"
          value={this.props.newTodo}
          onChange={this.props.handleChange}
          onKeyDown={this.props.onAddItem} />
      </div>
    );
  }
}

export default InputArea;