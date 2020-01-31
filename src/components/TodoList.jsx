import React from 'react'
import Todo from './Todo'

function TodoList({todosData, toggleTodo, deleteTodoData}) {
    const todoList = todosData.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodoData={deleteTodoData} />
    })

    return (
        <ul className="todo-list main-container">{ todoList }</ul>
    )
}

export default TodoList
