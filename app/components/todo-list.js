import React, {Component} from 'react';
import {
  ListView,
  Text
} from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const TodoList = (todolist) => {
  console.log('todolist: ', todolist);
  return(
    <ListView
    dataSource={ds.cloneWithRows(todolist.todolist)}
    renderRow={(rowData) => <Text>{rowData}</Text>}/>
  );
}
export default TodoList;
