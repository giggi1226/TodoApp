import React, {Component} from 'react';
import {
  ListView,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
   return (
     <View
       key={`${sectionID}-${rowID}`}
       style={{
         height: adjacentRowHighlighted ? 4 : 1,
         backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
       }}
     />
   );
 }

const TodoList = ({todolist, changeText, newTodo, onPressRow}) => {

  const renderRow = (rowData) => (
    <TouchableOpacity onPress={() => onPressRow(rowData)}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 15}}>{rowData}</Text>
      </View>
    </TouchableOpacity>
  )

  return(
    <View>
      <TextInput
        style={{height: 40, borderColor: '#CCCCCC', borderWidth: 1, padding: 10}}
        placeholder="Add todo here"
        onChangeText={changeText}
        value={newTodo}
      />
      <ListView
        dataSource={todolist}
        renderRow={renderRow}
        renderSeparator={_renderSeparator}
        enableEmptySections
      />
  </View>
  );
}
export default TodoList;
