import React from 'react'
import '../index.css'

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.toDo.completed}/> 
      <p>{props.toDo.text}</p>
    </div>
  )
}

export default ToDoItem