import React from 'react'
import { Link } from 'react-router-dom'
import { FaEllipsisV, FaRegTrashAlt } from "react-icons/fa";
import './Todo.css'

export default function Todo({todo, toggleTodo, deleteTodoData}) {

    const handleToggleTodo = () => toggleTodo(todo.id, !todo.done)
    const handleDeleteTodo = () => deleteTodoData(todo.id)

    return (
        <>
            <li className={`todo ${todo.done ? 'done' : ''}`}>
                <input type="checkbox" id={todo.id} className="todo-checkbox" onChange={handleToggleTodo} />
                <label htmlFor={todo.id} className="todo-title">{todo.title}</label>
                <Link  to={{
                    pathname: `/edit_todo/${todo.id}`,
                    name: todo.title,
                }}>
                    <button className="btn btn-detail"><FaEllipsisV/></button>
                </Link>
                <button className="btn btn-trash" onClick={handleDeleteTodo}><FaRegTrashAlt/></button>
            </li>
        </>
    )
}