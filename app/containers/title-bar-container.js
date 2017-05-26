import { connect } from 'react-redux';
import TitleBar from '../components/title-bar'
import {addTodoAction} from '../actions/actions-todo';

function mapDispatchToProps(dispatch, getState) {
  return {
    addButton: () => dispatch(thunk())
  };
}

const thunk = () => (
  (dispatch, getState) => {
    console.log('thunk getSate', getState());
    dispatch(addTodoAction(getState().todoListReducer.itemName))
  }
)

export default connect(() => ({}), mapDispatchToProps)(TitleBar);
