import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/layouts/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'
import EditTodoForm from './components/EditTodoForm/EditTodoForm'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { FaRegSmileWink } from "react-icons/fa"
import './App.css'

export default class App extends Component {
  static BASE_URL = "http://localhost:3000/api/v1/"

  state = {
    todosData: [],  
    error: null,
    flashMsg: null
  }

  // After all the elements of the page is rendered correctly, this method is called.
  // Then I call the setState() method (inside getTodosData()) to change the state of this app
  // and render() the updated data loaded JSX.
  componentDidMount() {
    this.getTodosData()
  }

  /*************************************************************/
  /* HTTP REQUESTS *********************************************/
  /*************************************************************/

  //GET todosData from the database
  getTodosData(){
    axios.get(`${App.BASE_URL}todos/?limit=300`)
      .then(res => {
        const todosData = res.data
        console.log(todosData)
        this.setState({ todosData })
      })
      .catch(error => this.setState({ error }))
  }

  //POST new todoData to the database
  addTodoData = ({title, content}) => {
    axios.post(`${App.BASE_URL}todos`, {title, content})
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        this.setState({flashMsg: 'Succesfully added!'})
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  //PATCH todoData to the database
  updateTodosData = (id, {title, content, done}) => {
    axios.patch(`${App.BASE_URL}todos/${id}`, {title, content, done})
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        this.setState({flashMsg: 'Succesfully updated!'})
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  //DELETE todoData from the database
  deleteTodoData = (id) => {
    axios.delete(`${App.BASE_URL}todos/${id}`)
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        this.setState({flashMsg: 'Succesfully deleted!'})
        this.getTodosData() //call getTodosData for refresh todosData
      })
  }

  /*************************************************************/
  /*************************************************************/
  /*************************************************************/

  //This method is called for change todo's status (done is true or false)
  toggleTodo = (id, done) => {
    this.updateTodosData(id, {done})
  }

  //This method is called when save button in EditTodoForm is Clicked
  editTodo = (id, {title, content, done}) => {
    this.updateTodosData(id, {title, content, done})
  }

  render() {
    const {todosData} = this.state
    // const {todosData, flashMsg} = this.state

    if (!todosData) {
      return <p>Loading...</p>
    }

    return (
      <div className="wrapper">
        
        <Switch>
          <Route exact path="/">
            <Header/>
            {/* <div className="flash-msg">
              { flashMsg !== null && <p>{flashMsg}</p> }
            </div> */}
            
            {
            todosData.length === 0 ? 
              <div className="msg-chill-container"><h1 className="msg-chill">Do nothing and chill <FaRegSmileWink/> </h1></div>
              : 
              <TodoList todosData={todosData} toggleTodo={this.toggleTodo} deleteTodoData={this.deleteTodoData}/>
            }

            {
            todosData.length !== 0 && 
                <div className="msg-todo-left">You have {todosData.filter(todo => !todo.done).length} left to do.</div>
            }
            <AddTodoForm addTodoData={this.addTodoData} />
          </Route>

          <Route path='/edit_todo/:id'>
            <EditTodoForm todosData={todosData} toggleTodo={this.toggleTodo} editTodo={this.editTodo} deleteTodoData={this.deleteTodoData}/>
          </Route>

          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
    </div>
    )
  }
}