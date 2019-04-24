import React from 'react'

import { get } from 'lodash'
import Header from './Header'
import Tasks from './Tasks'

import sampleTasks from '../sample-tasks'

// -----------END--OF--IMPORTS------------------

class App extends React.Component {
  state = {
    tasks: {},
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('allTasks')

    if (localStorageRef) {
      this.setState({ tasks: JSON.parse(localStorageRef) })
    }

    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentDidUpdate() {
    localStorage.setItem('allTasks', JSON.stringify(this.state.tasks))
  }

  handleScroll = () => {
    const controlBar = document.getElementsByClassName('control-bar')[0]
    const menu = document.getElementsByClassName('tada-todo')[0]

    const sticky = controlBar.offsetTop

    if (menu.offsetTop >= sticky) {
      controlBar.classList.add('sticky')
    } else {
      controlBar.classList.remove('sticky')
    }
  }


  addTask = (task) => {
    this.setState((prev) => {
      const newTasks = { [`task${Date.now()}`]: task, ...prev.tasks }

      return { tasks: newTasks }
    })
  }

  updateTask = (key, updatedTask) => {
    this.setState((prev) => {
      const tasks = { ...prev.tasks }
      tasks[key] = updatedTask
      return { tasks }
    })
  }

  toggleTodoStatus = (key) => {
    this.setState((prev) => {
      const tasks = { ...prev.tasks }
      tasks[key].status = !tasks[key].status
      return { tasks }
    })
  }

  removeTask = ((key) => {
    this.setState((prev) => {
      const tasks = { ...prev.tasks }
      delete tasks[key]
      return { tasks }
    })
  })

  loadSampleTasks = () => {
    this.setState({
      tasks: sampleTasks,
    })
  }

  deleteSampleTasks = () => {
    this.setState({
      tasks: {},
    })
  }

  render() {
    Object.keys(this.state.tasks)
      .filter((taskKey) => !!this.state.tasks[taskKey]) // only non-null props
      .reduce((validTasks, taskKey) => ({
        ...validTasks,
        [taskKey]: this.state.tasks[taskKey],
      }), {})

    const sortedTodos = get(this.state, 'tasks', {})

    return (
      <div className={'tada-todo'}>
        <div className={'tadaWindow'}>
          <Header tagline={'Procrastination goes poof!'} />
          <button className={'sample-controls'} type={'button'} onClick={this.loadSampleTasks}>Load Samples</button>
          <button className={'sample-controls'} type={'button'} onClick={this.deleteSampleTasks}>Delete All</button>
          <Tasks
            tasks={sortedTodos}
            removeTask={this.removeTask}
            toggleTodoStatus={this.toggleTodoStatus}
            loadSampleTasks={this.loadSampleTasks}
            addTask={this.addTask}
          />
        </div>
      </div>
    )
  }
}

export default App
