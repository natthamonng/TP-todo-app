import React from 'react'
import './Pagination.css'

export default function Pagination({todosPerPage, totalTodos, paginate}) {
    const pageNumbers = []

    for (let i=1; i <= Math.ceil(totalTodos/todosPerPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className="pagination">
                {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <div onClick={() => paginate(number)} className="page-link">
                        {number}
                    </div>
                </li>
                ))}
            </ul>
        </>
    )
}