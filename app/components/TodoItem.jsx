import React from 'react';
import moment from 'moment';

const TodoItem = (props) => {
  let { text, completed, id, createdAt, completedAt } = props;
  let renderDate = () => {
    let message = 'Created on: ';
    let timestamp = createdAt;

    if (completed) {
      message = 'Completed on: ';
      timestamp = completedAt
    }

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'); 
  };

  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" defaultChecked={completed} onChange={() => {
         props.onToggle(id)
        }} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </label>
    </li>
  );
}

export default TodoItem;
