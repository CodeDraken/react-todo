import React, { Component } from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1,text: 'Make coffee'},
        {id: 2,text: 'Make tacos'},
        {id: 3,text: 'Drink coffee'},
        {id: 4,text: 'Eat tacos'}
      ],
      showCompleted: false,
      searchText: ''
    };
  }

  handleAddTodo = (text) => {
    alert('new todo: ' + text);
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;

