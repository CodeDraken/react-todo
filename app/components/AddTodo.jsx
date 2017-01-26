import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoInput.value;
    if ( todoText.length > 0 ) {
      this.refs.todoInput.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoInput.focus();
    }
  }
  
  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todoInput" type="text" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
  
}

export default connect()(AddTodo);
