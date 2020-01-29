import React from 'react'

function Todo({todo}) {
    return (
        <>
            <li>
                <input type="checkbox" name="" id={todo.id} done={todo.done}/>
                <label htmlFor={todo.id}>{' ' + todo.title}</label>
            </li>
        </>
    )
}

export default Todo
