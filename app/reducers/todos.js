const todoListReducer = (state = { todos: [{itemName: 'world', isDone: false}]}, action) => {
  const newState = {...state};
  switch(action.type){
    case 'ADD_TODO':
    console.log('state item name', state);
      newState.todos.push({itemName: state.itemName, isDone: false});
      newState.itemName = ''
      return newState;
    case 'UPDATE_TODO':
      console.log(action.payload);
      newState.itemName = action.payload.text
      break;
    case 'DELETE_TODO':
      if (action.payload > -1) {
        newState.todos.splice(action.payload, 1);
      }
      break;
    case 'MARK_DONE':
      newState.todos[action.payload].isDone = !state.todos[action.payload].isDone ;
      break;
  }
  return newState;
}
export default todoListReducer;
