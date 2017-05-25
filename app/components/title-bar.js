import React, {Component} from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TitleBar = () => (
  <View style={styles.toolbar}>
    <Text style={styles.button}></Text>
    <Text style={styles.title}>ALL Todos</Text>
    <TouchableOpacity style={styles.button} onPress= {()=>console.log('hello')}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  button: {
    width: 50
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default TitleBar;
