import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import TitleBar from './components/title-bar';
import TodoList from './containers/list-state-mapping';
import store from './store';

const TodoApp = () => (
  <Provider store={store}>
    <View>
      <TitleBar/>
      <TodoList/>
    </View>
  </Provider>
);

export default TodoApp;
