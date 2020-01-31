import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './Todo.css'

function Todo({todo, toggleTodo, deleteTodoData}) {

    function handleToggleTodo() {
        toggleTodo(todo.id, !todo.done)
    }

    function handleDeleteTodo() {
        deleteTodoData(todo.id) 
    }

    return (
        <>
            <li className={`todo ${todo.done ? 'done' : ''}`}>
                <input type="checkbox" id={todo.id} className="todo-checkbox" onChange={handleToggleTodo} />
                <label htmlFor={todo.id} className="todo-title">{todo.title}</label>
                {/* <small>{new Date(todo.createdAt).toLocaleDateString()}</small> */}
                
                <button className="btn btn-delete" onClick={handleDeleteTodo}><FaTrashAlt style={{fontSize: '18px', color:'#a01414'}} /></button>
                <Link  to={{
                    pathname: `/edit_todo/${todo.id}`,
                    name: todo.title,
                }}>
                    <button className="btn btn-edit"><FaEdit style={{fontSize: '18px', color:'#575757'}} /></button>
                </Link>
            </li>
        </>
    )
}

export default Todo
