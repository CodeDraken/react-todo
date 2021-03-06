import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc',
        text: 'Something to do',
        completed: false,
        createdAt: 342343
      }
    };
    const res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    const todos = [{
      id: 111,
      text: 'stuff',
      completed: false,
      completedAt: undefined,
      createdAt: 0
    }];
    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };
    const res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });


  it('should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123a'
    };
    const res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };
    const res = actions.logout();

    expect(res).toEqual(action);
  });


/////////////////////////////////////////////////
  describe('Tests with firebase todos', () => {
    let testTodoRef;
    let uid;
    let todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'todo',
          completed: false,
          createdAt: 3234234
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done());
    });

    it('should add todos from FB and dispatch startAddTodos action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('todo');
        done();
      }, done());
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
      const todoText = 'Test item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
    });

  });

  //////////////////////////////////

});
