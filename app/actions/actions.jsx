const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_SHOW_COMPLETED = 'TOGGLE_SHOW_COMPLETED';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    searchText
  };
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export const toggleShowCompleted = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
