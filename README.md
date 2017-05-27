# TodoApp

A simple todo list application built using react native and redux. The application, as of right now, can only add to the list. Just type in something in the input click add and you will see it do its magic.

# from the command line

1. clone the repo (I prefer to do cloning on Desktop)
2. cd into the project
3. npm install
4. npm react-native run-ios

#Purpose

Their were a few reasons I made this application first reason was to learn redux, I knew how to use it but was not sure how everything was connected. Secondly to write an application that is easy to understand so others can learn.

dispatch takes in an action i.e dispatch(addTodoAction)
once this is called addTodoAction calls the reducer todoListReducer
todoListReducer reducer updates the state of the application
