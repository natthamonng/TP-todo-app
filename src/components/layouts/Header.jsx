import React from 'react'

export default function Header({name}) {
    return (
        <header>
            <h1>{name? name: 'Todo List'}</h1>
        </header>
    )
}