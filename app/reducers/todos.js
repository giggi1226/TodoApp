const todoListReducer = (state = { todos: ['world']}, action) => {
  const newState = {...state};
  switch(action.type){
    case 'ADD_TODO':
      newState.todos.push(state.itemName);
      newState.itemName = ''
      return newState;
    case 'UPDATE_TODO':
      newState.itemName = action.payload
    case 'DELETE_TODO':
      if (action.payload > -1) {
        newState.todos.splice(action.payload, 1);
      }
  }
  return newState;
}
export default todoListReducer;
