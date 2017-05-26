export const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  payload: text
});

export const updateTodoAction = (text) => ({
  type: 'UPDATE_TODO',
  payload: text
});
