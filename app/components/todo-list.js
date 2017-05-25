import React, {Component} from 'react';
import {
  ListView,
  Text
} from 'react-native';


const TodoList = (todolist) => {
  console.log('todolist: ', todolist);
  return(
    <ListView
    dataSource={todolist.todolist}
    renderRow={(rowData) => <Text>{rowData}</Text>}/>
  );
}
export default TodoList;
