import { connect } from 'react-redux';
import TodoList from '../components/todo-list'

function mapStateToProps(state) {
  console.log('state: ', state.todoListReducer.todos);
  return {
    todolist: state.todoListReducer.todos
  };
}

export default connect(mapStateToProps)(TodoList);
