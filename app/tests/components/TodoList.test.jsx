import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import configure from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    let todos = [
      {id: 1,text: 'item', completed: false, completedAt: undefined, createdAt: 0},
      {id: 2,text: 'item 2', completed: false, completedAt: undefined, createdAt: 0}
    ];
    let store = configure({
      todos
    });
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    let todoItemComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todoItemComponents.length).toBe(todos.length);

    // let todoList = TestUtils.renderIntoDocument(<div><TodoList todos={todos}/></div>);

    // let $el = $(ReactDOM.findDOMNode(todoList));
    // expect($el.find('.todo').length).toBe(2);
  });

  it('should show a message when no todos found', () => {
    let todos = [];
    let todoList = TestUtils.renderIntoDocument(<div><TodoList todos={todos}/></div>);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
