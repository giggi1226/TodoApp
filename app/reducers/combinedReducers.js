import { combineReducers } from 'redux'
import todoListReducer from './todos'

const rootReducer = combineReducers({
  todoListReducer
});

export default rootReducer;
