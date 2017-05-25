const todoListReducer = (state = { todos: ['world']}, action) => {
  const newState = {...state};
  switch(action.type){
    case 'ADD_TODO':
      newState.todos.push(action.text);
      return newState;
  }
  return newState;
}
export default todoListReducer;
