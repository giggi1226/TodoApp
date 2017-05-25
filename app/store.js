import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers/combinedReducers';

export default createStore(reducers)
