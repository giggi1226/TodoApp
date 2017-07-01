export const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  payload: text
});

export const updateTodoAction = (text) => ({
  type: 'UPDATE_TODO',
  payload: {
    text,
    isDone: false
  }
});

export const deleteTodoAction = (text) => ({
  type: 'DELETE_TODO',
  payload: text
});

export const isDoneAction = (text) => ({
  type: 'MARK_DONE',
  payload: text
});
