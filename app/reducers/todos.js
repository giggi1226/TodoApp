const todoListReducer = (state, action) => {
  newState = {...state}
  newState.todos = ['hello', 'world'];
  return newState;
}
export default todoListReducer;
