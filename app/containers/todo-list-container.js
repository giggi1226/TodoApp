import { connect } from 'react-redux';
import TodoList from '../components/todo-list'
import {
  ListView
} from 'react-native';
import {updateTodoAction, deleteTodoAction, isDoneAction} from '../actions/actions-todo';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

function mapStateToProps(state) {
  console.log('state is: ', state);
  return {
    todolist: ds.cloneWithRows(state.todoListReducer.todos),
    newTodo: state.todoListReducer.itemName
  };
}

function mapDispatchToProps(dispatch){
  return{
    changeText: (text) => dispatch(updateTodoAction(text)),
    onPressTrash: (item) => dispatch(deleteRowThunk(item)),
    onPressRow: (item) => dispatch(isDoneThunk(item))
  }
}

const deleteRowThunk = (item) => (
  (dispatch, getState) => (
    dispatch(deleteTodoAction(getState().todoListReducer.todos.findIndex((todo) => todo === item)))
  )
);

const isDoneThunk = (item) => (
  (dispatch, getState) => (
    dispatch(isDoneAction(getState().todoListReducer.todos.findIndex((todo) => todo === item)))
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
