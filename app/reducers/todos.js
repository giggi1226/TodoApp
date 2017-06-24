const todoListReducer = (state = { todos: [{itemName: 'world', isDone: false}], item: {itemName: '', isDone: false}}, action) => {
  const newState = {...state};
  switch(action.type){
    case 'ADD_TODO':
      newState.todos.push(state.item);
      newState.itemName = ''
      return newState;
    case 'UPDATE_TODO':
      newState.item.itemName = action.payload.text;
      newState.item.isDone = action.payload.isChecked;
    case 'DELETE_TODO':
      if (action.payload > -1) {
        newState.todos.splice(action.payload, 1);
      }
  }
  return newState;
}
export default todoListReducer;
