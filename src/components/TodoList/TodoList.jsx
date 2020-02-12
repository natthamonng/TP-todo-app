import React, {useState} from 'react'
import Todo from '../Todo/Todo'
import Pagination from '../Pagination/Pagination'
import {FaCheckCircle, FaSpinner, FaTasks} from "react-icons/fa";
import './TodoList.css'

// Constant functions (be called for filter visible todo list)
const dataFilters = {
    all: data => [ ...data ],
    active: data => data.filter(d => !d.done),
    completed: data => data.filter(d => d.done)
}

export default function TodoList({todosData, toggleTodo, deleteTodoData}) {
    const [activeFilter, setActiveFilter] = useState('all')
    const allList = () => setActiveFilter('all')
    const activeList = () => setActiveFilter('active')
    const completedList = () => setActiveFilter('completed')
    debugger
    const filterData = dataFilters[activeFilter](todosData)
    
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [todosPerPage] = useState(9)

    // Get current todos
    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = filterData.slice(indexOfFirstTodo, indexOfLastTodo)

    // Change page (called when page number clicked)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Update view
    const todoList = currentTodos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodoData={deleteTodoData} />
    })
    
    return (
        <>
            <div className="group-filter">
                <input id="all" className="filter-radio" type="radio" name="radio" onClick={allList}/>
                <label htmlFor="all" className="filter"><FaTasks/> All</label>

                <input id="active" className="filter-radio" type="radio" name="radio" onClick={activeList}/>
                <label htmlFor="active" className="filter"><FaSpinner/> Active</label>

                <input id="completed" className="filter-radio" type="radio" name="radio"  onClick={completedList}/>
                <label htmlFor="completed" className="filter"><FaCheckCircle/> Completed</label>
            </div>
            
            <ul className="todo-list main-container">
                { todoList }
            </ul>
            
            { filterData.length > todosPerPage &&
                <Pagination todosPerPage={todosPerPage} totalTodos={filterData.length} paginate={paginate} />
            }
        </>
    )
}
