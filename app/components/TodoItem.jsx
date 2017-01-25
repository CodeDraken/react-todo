import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

export const TodoItem = (props) => {
  let {text, completed, id, createdAt, completedAt, dispatch} = props;
  let todoClassName = completed
    ? 'todo todo--completed'
    : 'todo';
  let renderDate = () => {
    let message = 'Created on: ';
    let timestamp = createdAt;

    if (completed) {
      message = 'Completed on: ';
      timestamp = completedAt;
    }

    return message + moment
      .unix(timestamp)
      .format('MMM Do YYYY @ h:mm a');
  };

  return (
    <li>
      <label className={todoClassName}>
        <div>
          <input type="checkbox" defaultChecked={completed} onChange={() => {
            dispatch(actions.toggleTodo(id));
          }}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </label>
    </li>
  );
}

export default connect()(TodoItem);
