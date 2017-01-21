import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';
import TodoItem from 'TodoItem';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {id: 1,text: 'item'},
      {id: 2,text: 'item 2'}
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    setTimeout(() => {
      const todoItemComponents = TestUtils.scryRenderedComponentsWithType( todoList, TodoItem );
      expect(todoItemComponents.length).toBe(todos.length);
    }, 0);
  });
});
