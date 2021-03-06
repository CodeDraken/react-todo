import React from 'react';
import {connect} from 'react-redux';

import TodoItem from 'TodoItem';
import TodoAPI from 'TodoAPI';

export const TodoList = (props) => {
  let {todos, showCompleted, searchText} = props;
  let renderTodos = () => {
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    if (filteredTodos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }

    return filteredTodos.map( (todo) => {
      return (
        // pass all props on todo down with destructuring
        <TodoItem key={todo.id} {...todo}  />
      )
    });
    
  }

  return (
    <ul className="no-bullet todo-list">
      {renderTodos()}
    </ul>
  );

}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
