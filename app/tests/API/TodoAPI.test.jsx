import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('set todos', () => {
    it('should set valid todos array', () => {
      let todos = [{id: 0,text: 'todo',completed: true}];

      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('get todos', () => {
    it('should return empty array for bad data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      let todos = [{id: 0,text: 'todo',completed: true}];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();

      expect (actualTodos).toEqual(todos);
    });
  });

  describe('filter todos', () => {
    let todos = [
      {id:1, text:'text', completed: true},
      {id:2, text:'todo', completed: false},
      {id:3, text:'coffee', completed: true}
      ];
    let filteredTodosT = TodoAPI.filterTodos(todos, true, '');
    let filteredTodosF = TodoAPI.filterTodos(todos, false, '');

    it('should return all todos if showCompleted is true', () => {
      expect(filteredTodosT.length).toBe(3);
    });

    it('should return only incomplete todos if showCompleted is false', () => {
      expect(filteredTodosF.length).toBe(1);
    });

    it('should sort incomplete before completed todos', () => {
      expect(filteredTodosT[0].completed).toBe(false);
    });

    it('should filter todos by search text', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'coffee');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if search text empty', () => {
      expect(filteredTodosT.length).toBe(3);
    });

  });

});
