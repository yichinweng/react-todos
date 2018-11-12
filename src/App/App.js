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
      id: this.state.newTodoId,
    }
    const todos = [...this.state.todos, item];
    this.setState((state) => {
      return { todos, newTodo: '', newTodoId: state.newTodoId + 1}
    });
  }
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }
  handleCheck = (e, id) => {
    const todos = [...this.state.todos];
    todos.map(el => {
      if (el.id === id) {
        return el.done = e.target.checked;
      }
    })
    this.setState({ todos });
  }
  handleDelete = (e, id) => {
    const todos = [...this.state.todos].filter(el => el.id !== id);
    this.setState({ todos });
  }
  handleFilterClicked = (t) => {
    this.setState({filter: t});
  }
  handleClearClicked = () => {
    const todos = [...this.state.todos];
    const updateTodos = todos.filter(el => el.done === false);
    this.setState({ todos: updateTodos });
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
            onFilterClick={(t) => this.handleFilterClicked(t)}
            onClearClick={this.handleClearClicked} /> : ''
        }
      </div>
    );
  }
}

export default App;
