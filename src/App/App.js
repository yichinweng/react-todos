import React, { Component } from 'react';
import InputArea from '../InputArea/InputArea';
import Items from '../Items/Items';
import TodoFooter from '../TodoFooter/TodoFooter';
import './App.css';

const ENTER_KEY = 13;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          text: '買沐浴乳',
          done: false,
        },
        {
          id: 1,
          text: '買水果',
          done: false,
        },
      ],
      newTodo: '',
      newTodoId: 2,
      filter: 'All',
    }
  }
  handleToggleAll = (e) => {
    const todos = [...this.state.todos];
    if (todos.filter((val) => val.done === false).length === 0) {
      todos.map((val) => val.done = false);
      this.setState({ todos });
      return;
    }
    todos.map((val) => val.done = true);
    this.setState({ todos });
  }
  handleAddItem = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    const item = {
      text: this.state.newTodo,
      done: false,
      id: this.state.newTodoId + 1,
    }
    const todos = [...this.state.todos, item];
    this.setState({ todos, newTodo: '' });
  }
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }
  handleCheck = (e, index) => {
    const todos = [...this.state.todos];
    todos[index].done = e.target.checked;
    this.setState({ todos });
  }
  handleDelete = (e, index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }
  handleFilterClicked = (t) => {
    this.setState({filter: t});
  }
  render() {
    return (
      <div className="App">
        <div className="App-name">Todos</div>
        <InputArea
          todos={this.state.todos}
          newTodo={this.state.newTodo}
          onCheckAll={this.handleToggleAll}
          handleChange={this.handleChange}
          onAddItem={this.handleAddItem}
        />
        <Items
          todos={this.state.todos}
          filter={this.state.filter}
          onChecked={this.handleCheck}
          onDelete={this.handleDelete}
        />
        {this.state.todos.length > 0 ? 
          <TodoFooter
            todos={this.state.todos}
            filter={this.state.filter}
            onFilterClick={(t) => this.handleFilterClicked(t)} /> : ''
        }
      </div>
    );
  }
}

export default App;
