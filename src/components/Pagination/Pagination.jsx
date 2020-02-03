import React from 'react'

export default function Pagination({todosPerPage, filterData}) {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(filterData.length/todosPerPage); i++ ) {
        pageNumbers.push(i);
    }
    return (
        <div>
            
        </div>
    )
}
