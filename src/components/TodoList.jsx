import React from 'react'
import Todo from './Todo'

function TodoList({todosData, toggleTodo}) {
    const todoList = todosData.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
    return (
        <ul className="todo-list">{ todoList }</ul>
    )
}

export default TodoList
