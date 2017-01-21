import React, { Component } from 'react';

import TodoList from 'TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Make coffee'
        },
        {
          id: 2,
          text: 'Make tacos'
        },
        {
          id: 3,
          text: 'Drink coffee'
        },
        {
          id: 4,
          text: 'Eat tacos'
        }
      ]
    };
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoApp;
