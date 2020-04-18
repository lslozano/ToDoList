import React, { Component } from 'react'
import './index.css'
import ToDoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }

  
  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} toDo={item} />)

    return (
    <div className="todo-list">
      {todoItems}
    </div>
    )
  }
}

export default App;
