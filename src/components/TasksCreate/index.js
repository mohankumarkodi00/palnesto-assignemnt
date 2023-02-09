import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'

import Tasks from '../Tasks'

import './index.css'

class TasksCreate extends Component {
  state = {
    tasksList: [],
    emailInput: '',
    dateInput: '',
    isFilterActive: false,
    nameInput:"",
    
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.map(eachTask => {
        if (id === eachTask.id) {
          return {...eachTask, isStarred: !eachTask.isStarred}
        }
        return eachTask
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }
  onChangeNameInput = event =>{
    this.setState({nameInput: event.target.value})
  }

  onChangeEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {nameInput,emailInput, dateInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    
    const newTask = {
      id: v4(),
      email: emailInput,
      date: formattedDate,
      isStarred: false,
      name:nameInput,
    

    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      emailInput: '',
      dateInput: '',
      nameInput:""
    }))
  }

  getFilteredtasksList = () => {
    const {tasksList, isFilterActive} = this.state

    if (isFilterActive) {
      return tasksList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return tasksList
  }

  render() {
    const {emailInput, dateInput, isFilterActive,nameInput} = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
    const filteredtasksList = this.getFilteredtasksList()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="tasks-container">
            <div className="add-tasks-container">
              <form className="form" onSubmit={this.onAddTask}>
                <h1 className="add-tasks-heading">Add Task</h1>
                <label htmlFor="name" className="label">
                  EMPLOYEE NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={nameInput}
                  onChange={this.onChangeNameInput}
                  className="input"
                  placeholder="Name"
                />
                <label htmlFor="email" className="label">
                  EMAIL
                </label>
                <input
                  type="text"
                  id="email"
                  value={emailInput}
                  onChange={this.onChangeEmailInput}
                  className="input"
                  placeholder="Email"
                />
                
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                  className="input"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="tasks"
                className="tasks-img"
              />
            </div>
            <hr className="hr" />
            <div className="header-with-filter-container">
              <h1 className="tasks-heading">Tasks</h1>
              <button
                type="button"
                className={`filter-style ${filterClassName}`}
                onClick={this.onFilter}
              >
                Starred
              </button>
            </div>
            <ul className="tasks-list">
              {filteredtasksList.map(eachTask => (
                <Tasks
                  key={eachTask.id}
                  taskDetails={eachTask}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TasksCreate