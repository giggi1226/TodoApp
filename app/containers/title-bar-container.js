import { connect } from 'react-redux';
import TitleBar from '../components/title-bar'
import {addTodoAction} from '../actions/actions-todo';

function mapDispatchToProps(dispatch, getState) {
  return {
    addButton: () => dispatch(thunk())
  };
}

const thunk = () => (
  (dispatch, getState) => dispatch(addTodoAction(getState().todoListReducer.item.itemName))
)

export default connect(() => ({}), mapDispatchToProps)(TitleBar);
