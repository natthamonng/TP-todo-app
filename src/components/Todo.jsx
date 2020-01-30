import React from 'react'
import './Todo.css'

function Todo({todo, toggleTodo}) {
    function handleToggleTodoLocal() {
        toggleTodo(todo.id, !todo.done)
    }

    return (
        <>
            <li className={`todo ${todo.done ? 'done' : ''}`}>
                <input type="checkbox" id={todo.id} className="todo-checkbox" onChange={handleToggleTodoLocal} />
                <label htmlFor={todo.id} className="todo-title">{todo.title}</label><br/>
            </li>
        </>
    )
}

export default Todo
