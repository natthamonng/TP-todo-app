import React, {useRef, useState} from 'react'
import { useParams, Link } from "react-router-dom"
import Header from '../layouts/Header'
import RichTextEditor from '../RichTextEditor/RichTextEditor'
import PageNotFound from '../PageNotFound/PageNotFound'
import {Modal, Button} from 'react-bootstrap'
import { FaTrashAlt, FaRegSave, FaAngleLeft, FaCalendarAlt, FaQuoteLeft, FaCheckCircle, FaThList } from "react-icons/fa"
import './EditTodoForm.css'

export default function EditTodoForm({todosData, editTodo, toggleTodo, deleteTodoData}) {
    //State to show/hide modal when delete button is clicked
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //useParams() to recieve id parameter from router
    let { id } = useParams();
    const todo = todosData.find(todo => todo.id === Number(id))

    const todoTitleRef = useRef(null)
    const todoContentRef = useRef(null)

    if (!todo) {
        return <PageNotFound />
    }

    const handleEditTodo = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newTodoData = {
            title: todoTitleRef.current.value,
            content: todoContentRef.current.value
        }

        if (newTodoData.title === '') return

        editTodo(todo.id, newTodoData)
    }

    const handleToggleTodo = () => {
        toggleTodo(todo.id, !todo.done)
    }

    const handleDeleteTodo = () => {
        deleteTodoData(todo.id) 
    }

    return (
        
        <>
            <Header name="Edit todo" />
            <Link to='/'>
                    <button className="btn btn-back">
                        <FaAngleLeft className="msg-back" style={{fontSize: '20px'}} />
                        <span className="msg-back">Back</span>
                    </button>
            </Link>
            
            <div className="main-container">
                <form className="edit-todo-form" onSubmit={handleEditTodo}>
                    
                    <div className={`edit-todo-item ${todo.done ? 'done' : ''}`}>
                        <h4><FaCheckCircle /> <span>Todo status</span></h4>
                        <input className="edit-todo-checkbox" type="checkbox" id={todo.id} defaultChecked={todo.done} onChange={handleToggleTodo}/>
                        <label htmlFor={todo.id}>{todo.done===true? 'Completed' : 'Active'}</label>                        
                    </div>

                    <div className="edit-todo-item">
                        <h4><FaThList /> <span>Title</span></h4>
                        <input className="edit-todo-input" type="text" defaultValue={todo.title} ref={todoTitleRef}/>
                    </div>
                    <div className="edit-todo-item">
                        <h4><FaQuoteLeft /> <span>Remarks</span></h4>
                        <RichTextEditor placeHolder="Remarks..." data={todo.content} defaultValue={todo.content} ref={todoContentRef} />
                        {/* <input className="edit-todo-input" type="text" placeHolder="Remarks..." defaultValue={todo.content} ref={todoContentRef}/> */}
                    </div>
                </form>
                <div>
                    <small className="msg-date"><FaCalendarAlt/> <span>Created at: </span>{new Date(todo.createdAt).toLocaleString()}</small>
                </div>
            </div>

            <div className="btn-group">
                <button className="btn btn-save" type="submit" onClick={handleEditTodo}><FaRegSave/> Save </button>
                <button className="btn btn-delete" type="submit" onClick={handleShow}><FaTrashAlt /> Delete </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, would you like to delete this todo?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Link to='/'>
                    <Button variant="danger" onClick={handleDeleteTodo}>
                        Delete
                    </Button>
                </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}