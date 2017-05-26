import { connect } from 'react-redux';
import TodoList from '../components/todo-list'
import {
  ListView
} from 'react-native';
import {updateTodoAction} from '../actions/actions-todo';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

function mapStateToProps(state) {
  return {
    todolist: ds.cloneWithRows(state.todoListReducer.todos),
    newTodo: state.todoListReducer.todos.text
  };
}

function mapDispatchToProps(dispatch){
  return{
    changeText: (text) => dispatch(updateTodoAction(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
