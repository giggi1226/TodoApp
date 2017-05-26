import React, {Component} from 'react';
import {
  ListView,
  TextInput,
  View,
  Text
} from 'react-native';


const TodoList = ({todolist, changeText, newTodo}) => {
  return(
    <View>
    <ListView
    dataSource={todolist}
    renderRow={(rowData) => <Text>{rowData}</Text>}/>
    <TextInput
      style={{height: 40}}
    placeholder="Type Here"
    onChangeText={changeText}/>
  </View>
  );
}
export default TodoList;
