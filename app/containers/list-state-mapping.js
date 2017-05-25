import { connect } from 'react-redux';
import TodoList from '../components/todo-list'
import {
  ListView
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

function mapStateToProps(state) {
  console.log('state: ', state.todoListReducer.todos);
  return {
    todolist: ds.cloneWithRows(state.todoListReducer.todos)
  };
}

export default connect(mapStateToProps)(TodoList);
