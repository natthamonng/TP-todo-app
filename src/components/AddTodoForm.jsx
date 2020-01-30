import React, {useRef} from 'react'
import './AddTodoForm.css'
import { FaRegPlusSquare } from "react-icons/fa";

function AddTodoForm({ handleAddTodo }) {

    const todoTitleRef = useRef(null)
    const todoContentRef = useRef(null)

    const handleAddTodoLocal = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newTodoData = {
            title: todoTitleRef.current.value,
            content: todoContentRef.current.value
        }

        if (newTodoData.title === '') return

        handleAddTodo(newTodoData);

        todoTitleRef.current.value = ''
        todoContentRef.current.value = ''
    }

    return (
        <>
            <form className="add-todo-form" onSubmit={handleAddTodoLocal}>
                <h3>Add new todo</h3>
                <div className="add-todo-form-item">
                    <input className="add-todo-input add-todo-title" type="text" placeholder="Todo" ref={todoTitleRef} />
                </div>
                <div className="add-todo-form-item">
                    <input className="add-todo-input add-todo-body" type="text" placeholder="Remarks" ref={todoContentRef} />
                </div>
                <button className="btn-add" type="submit" >
                    <FaRegPlusSquare style={{fontSize: '30px', color:'#575757'}} />
                </button>
            </form>
        </>
    )
}

export default AddTodoForm
