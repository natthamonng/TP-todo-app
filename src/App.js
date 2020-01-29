import React, { Component } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import './App.css'

export class App extends Component {
  state = {
    todosData: [],
    error: null
  }

  componentDidMount() {

    axios.get('http://localhost:3000/api/v1/todos')
      .then(res => {
        const todosData = res.data;
        console.log(todosData)
        this.setState({ todosData })
      })
      .catch(error => this.setState({error}))
  }

  render() {
    const {todosData} = this.state;

    if (!todosData) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <header>
          <h1>Todo App</h1>
        </header>
        <TodoList todosData={todosData} />
    </div>
    )
  }
}

export default App
