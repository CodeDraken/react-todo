import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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
