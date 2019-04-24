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
    const localStorageRef = localStorage.getItem('todos')

    if (localStorageRef) {
      this.setState({ tasks: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.tasks))
  }

  addTask = (task) => {
    this.setState((prev) => {
      const tasks = { ...prev.tasks }

      tasks[`task${Date.now()}`] = task

      return { tasks }
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
    console.log(sampleTasks)
    this.setState({
      tasks: sampleTasks,
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
        <div className={'menu'}>
          <Header tagline={'Procrastination goes poof!'} />
          <Tasks
            tasks={sortedTodos}
            removeTask={this.removeTask}
            toggleTodoStatus={this.toggleTodoStatus}
            loadSampleTasks={this.loadSampleTasks}
            addTask={this.addTask}
          />
          <button type={'button'} onClick={this.loadSampleTasks}>Load Samples</button>
        </div>
      </div>
    )
  }
}

export default App
