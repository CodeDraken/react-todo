import $ from 'jquery';

export default {
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // Filtered by showCompleted
    filteredTodos = filteredTodos.filter( (todo) => {
      return !todo.completed || showCompleted;
    });

    // Filtered by searchText
    filteredTodos = filteredTodos.filter ( (todo) => {
      let todoText = todo.text.toLowerCase();
      
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    // Sort todos with incomplete first
    filteredTodos.sort( (a,b) => {
      // -1 a come first 1 b come first 0 equal
      if ( !a.completed  && b.completed ) {
        return -1;
      } else if ( a.completed && !b.completed ) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
