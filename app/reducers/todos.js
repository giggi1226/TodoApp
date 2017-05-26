const todoListReducer = (state = { todos: ['world']}, action) => {
  const newState = {...state};
  console.log('newState: ', newState);
  switch(action.type){
    case 'ADD_TODO':
      newState.todos.push(state.itemName);
      return newState;
    case 'UPDATE_TODO':
      newState.itemName = action.payload
  }
  return newState;
}
export default todoListReducer;
