import React from 'react';
import moment from 'moment';

const TodoItem = (props) => {
  let {text, completed, id, createdAt, completedAt} = props;
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
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => {
            props.onToggle(id)
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

export default TodoItem;
