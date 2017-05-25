import { connect } from 'react-redux';
import TitleBar from '../components/title-bar'
import {addTodoAction} from '../actions/actions-todo';

function mapDispatchToProps(dispatch) {
  return {
    addButton: () => dispatch(addTodoAction('hello'))
  };
}

export default connect(() => ({}), mapDispatchToProps)(TitleBar);
