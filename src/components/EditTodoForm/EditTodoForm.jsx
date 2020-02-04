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

    const handleTodoContent = (id, { content }) => {
        todo.content = content;
    }

    const handleEditTodo = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const newTodoData = {
            title: todoTitleRef.current.value,
            content: todo.content//todoContentRef.current.value
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
                <div className="edit-todo-form">
                    
                    <div className={`edit-todo-item ${todo.done ? 'done' : ''}`}>
                        <h4><FaCheckCircle /> <span>Todo status</span></h4>
                        <input className="edit-todo-checkbox" type="checkbox" id={todo.id} defaultChecked={todo.done} onChange={handleToggleTodo}/>
                        <label htmlFor={todo.id}>{todo.done===true? 'Completed' : 'Active'}</label>
                    </div>

                    <div className="edit-todo-item">
                        <h4><FaThList /> <span>Title</span></h4>
                        <input className="edit-todo-input" type="text" defaultValue={todo.title} ref={todoTitleRef}/>
                    </div>
                    <div className="edit-todo-item-remarks">
                        <h4><FaQuoteLeft /> <span>Remarks</span></h4>
                        <RichTextEditor placeHolder="Remarks..." todoID={todo.id} defaultValue={todo.content} ref={todoContentRef} handleTodoContent={handleTodoContent}/>
                    </div>
                </div>
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
                    <Modal.Title>Delete this todo?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                <Button variant="light" className="btn btn-outline-secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Link to='/'>
                    <Button variant="light" className="btn btn-outline-danger" onClick={handleDeleteTodo}>
                        Delete
                    </Button>
                </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}