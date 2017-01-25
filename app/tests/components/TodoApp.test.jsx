import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import configureStore from 'configureStore';
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    const store = configureStore();
    const provider = TestUtils.renderIntoDocument(
      <div>
        <Provider store={store}>
          <TodoApp/>
        </Provider>
      </div>
    );

    // const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp[0]);
    // const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    let $el = $(ReactDOM.findDOMNode(provider));
    expect($el.find('.todo-app .todo-list').length).toEqual(1);

    // expect(todoList.length).toEqual(1);
  });

});
