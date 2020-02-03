import React, {useRef} from 'react'
import { FaPlusCircle } from "react-icons/fa"
import './AddTodoForm.css'

export default function AddTodoForm({ addTodoData }) {

    const todoTitleRef = useRef(null)
    // const todoContentRef = useRef(null)

    const handleAddTodo = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newTodoData = {
            title: todoTitleRef.current.value,
            // content: todoContentRef.current.value
        }

        if (newTodoData.title === '') return

        addTodoData(newTodoData);

        todoTitleRef.current.value = ''
        // todoContentRef.current.value = ''
    }

    return (
        <>
            <form className="add-todo-form" onSubmit={handleAddTodo}>
                <h3>Add new todo</h3>
                <div className="add-todo-form-item">
                    <input className="add-todo-input add-todo-title" type="text" placeholder="Todo" ref={todoTitleRef} />
                </div>
                {/* <div className="add-todo-form-item">
                    <input className="add-todo-input add-todo-body" type="text" placeholder="Remarks" ref={todoContentRef} />
                </div> */}
                <button className="btn-add" type="submit" >
                    <FaPlusCircle />
                </button>
            </form>
        </>
    )
}