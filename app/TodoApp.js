import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import TitleBar from './containers/title-bar-container';
import TodoList from './containers/todo-list-container';
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
