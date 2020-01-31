import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import EditTodo from './components/EditTodo'
import NotFound from './components/NotFound'
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

  //GET todosData from the database
  getTodosData(){
    axios.get(`${App.BASE_URL}todos`)
      .then(res => {
        const todosData = res.data;
        console.log(todosData)
        this.setState({ todosData })
      })
      .catch(error => this.setState({error}))
  }

  //POST new todoData to the database
  addTodoData = ({title, content}) => {
    axios.post(`${App.BASE_URL}todos`, {title, content})
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  //PATCH todoData to the database
  updateTodosData = (id, {title, content, done}) => {
    axios.patch(`${App.BASE_URL}todos/${id}`, {title, content, done})
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  //DELETE todoData from the database
  deleteTodoData = (id) => {
    axios.delete(`${App.BASE_URL}todos/${id}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  toggleTodo = (id, done) => {
    this.updateTodosData(id, {done})
  }

  editTodo = (id, {title, content, done}) => {
    this.updateTodosData(id, {title, content, done})
  }

  render() {
    const {todosData} = this.state;

    if (!todosData) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
          <header>
            <h1>Todo List</h1>
          </header>
            <TodoList todosData={todosData} toggleTodo={this.toggleTodo} deleteTodoData={this.deleteTodoData}/>
            <AddTodoForm addTodoData={this.addTodoData} />
          </Route>

          <Route path='/edit_todo/:id'>
            <EditTodo todosData={todosData} toggleTodo={this.toggleTodo} editTodo={this.editTodo}/>
          </Route>

          <Route>
            <NotFound/>
          </Route>
        </Switch>
        
    </div>
    )
  }
}

export default App
