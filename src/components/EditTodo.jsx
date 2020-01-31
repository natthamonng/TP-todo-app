import React, {useRef} from 'react'
import { FaTrashAlt, FaRegSave, FaAngleLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

function EditTodo({todosData, editTodo}) {
    let { id } = useParams();
    const todo = todosData.find(todo => todo.id === Number(id))

    const todoTitleRef = useRef(null)
    const todoContentRef = useRef(null)
    const todoDoneRef = useRef(null)

    if (!todo) {
        return <p>Loading...</p>
    }

    function handleEditTodo(event){
        event.preventDefault();
        event.stopPropagation();

        const newTodoData = {
            title: todoTitleRef.current.value,
            content: todoContentRef.current.value,
            done: todoDoneRef.current.value,
        }

        if (newTodoData.title === '') return

        editTodo(todo.id, newTodoData)
    }

    return (
        
        <>
            <header>
                <Link to='/'>
                    <FaAngleLeft style={{float: 'left', fontSize: '48px'}} />
                </Link>
                <h1> Edit todo </h1>
                </header>
                <div className="main-container">
            <form className="edit-todo-form">
                
                <div>
                    <input type="checkbox" id={todo.id} defaultChecked={todo.done} ref={todoDoneRef}/>
                    <input type="text" defaultValue={todo.title} ref={todoTitleRef}/>
                </div>
                <div>
                    <input type="text" defaultValue={todo.content} ref={todoContentRef}/>
                </div>
                <button type="submit" onClick={handleEditTodo}><FaRegSave/></button>
                <button type="submit"><FaTrashAlt/></button>
            </form>
        </div>
        </>
    )
}

export default EditTodo
