import React, {Component} from 'react';
import {
  ListView,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

const TodoList = ({todolist, changeText, newTodo, onPressTrash}) => {

  const renderRow = (rowData) => (
    <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 15}}>{rowData.itemName}</Text>
      <TouchableOpacity onPress={() => onPressTrash(rowData)}>
        <Icon name="ios-trash" size={30} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
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
