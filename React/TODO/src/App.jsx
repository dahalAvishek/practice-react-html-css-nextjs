/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./Todoitemraw";
import AddNew from "./Addnew"
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  handleClick(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(item => item.id !== id);
      return {
        todos: updatedTodos,
      };
    });
  }
  handleEnter(e) {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.setState(prevState => {  
          const updatedTodos = [
            ...prevState.todos,
            {
              id: (prevState.todos.length !== 0) ? prevState.todos[prevState.todos.length - 1].id + 1 : 1,
              text: e.target.value,
              completed: false
            }
          ]
          e.target.value = ""
          return {
            todos: updatedTodos
          }
        })
      }
    }
  }

  render() {
    const todoList = this.state.todos.map((item) => (   
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    ));
    return (
      <div>
        {todoList}
        <AddNew handleEnter={this.handleEnter}/>
      </div>
    )
  }
}
export default App;
