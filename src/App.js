import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import EditTodo from './components/EditTodo'
import './App.css'

export class App extends Component {

  static BASE_URL = "http://localhost:3000/api/v1/";

  state = {
    todosData: [],
    error: null
  }

  componentDidMount() {
    this.getTodosData()
  }

  //get todosData from the database
  getTodosData(){
    axios.get(`${App.BASE_URL}todos`)
      .then(res => {
        const todosData = res.data;
        console.log(todosData)
        this.setState({ todosData })
      })
      .catch(error => this.setState({error}))
  }

  handleAddTodo = ({title, content}) => {
    axios.post(`${App.BASE_URL}todos`, {title, content})
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  toggleTodo = (id, done) => {
    this.handleEditTodo(id, {done})
  }

  
  handleEditTodo = (id, {title, content, done}) => {
    axios.patch(`${App.BASE_URL}todos/${id}`, {title, content, done})
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  render() {
    const {todosData} = this.state;

    if (!todosData) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Switch>
          <Route path='/edit_todo/:id' component={EditTodo} />
        </Switch>
        <TodoList todosData={todosData} toggleTodo={this.toggleTodo} />
        <AddTodoForm handleAddTodo={this.handleAddTodo} />
    </div>
    )
  }
}

export default App
