import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import './Todo.css'

function Todo({todo, toggleTodo, handleEditTodo}) {

    function handleToggleTodoLocal() {
        toggleTodo(todo.id, !todo.done)
    }

    function handleEditTodoLocal(event) {
        handleEditTodo()
    }

    return (
        <>
            
            <li className={`todo ${todo.done ? 'done' : ''}`}>
                <input type="checkbox" id={todo.id} className="todo-checkbox" onChange={handleToggleTodoLocal} />
                <label htmlFor={todo.id} className="todo-title">{todo.title}</label><br/>
                <Link  to={{
                    pathname: `/manage_todo/${todo.id}`,
                    name: todo.title,
                    handleEditTodo: handleEditTodoLocal
                }}>
                    <button className="btn-edit"><FaEdit style={{fontSize: '24px', color:'#575757'}} /></button>
                </Link>
            </li>
            
        </>
    )
}

export default Todo
