import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/combinedReducers';

composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
