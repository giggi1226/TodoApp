# TodoApp

A simple todo list application built using react native and redux.

# Resources
For the Icons I used react-native-vector-icons - https://github.com/oblador/react-native-vector-icons

To get a grasp of how redux works - http://redux.js.org/docs/basics/ExampleTodoList.html

I also had a look at this repo as a guideline - https://github.com/ajwhite/ReactNative-Redux-Todo-List

# What it can do

1. Add to the list.

  Just type in something in the input field click add and you will see it do its magic.

2. Delete from the list (not to be mistaken with marking as complete).

  Click on the trash can and it will delete the row from the list

3. Mark complete
  
  Click anywhere on the row (except the trash can) and you will see a nice check mark appear

# From the command line

1. clone the repo (I prefer to do cloning on Desktop)
2. cd into the project
3. npm install
4. npm react-native run-ios

# Purpose

Their were a few reasons I made this application first reason was to learn redux, I knew how to use it but was not sure how everything was connected. Secondly to write an application that is easy to understand so others can learn.

dispatch takes in an action i.e dispatch(addTodoAction)
once this is called addTodoAction calls the reducer todoListReducer
todoListReducer reducer updates the state of the application
