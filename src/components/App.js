import React from 'react'

import PropTypes from 'prop-types'
import { get, map, sortBy } from 'lodash'
import Header from './Header'
import Order from './Order'

import sampleTasks from '../sample-tasks'
// import base from '../base'

const sortTask = (fa, fb) => {
  if (fa.status === fb.status) {
    return 0
  }
  return fa.status ? 1 : -1
}


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

    // const sortedTodos = map(map(get(this.state, 'tasks', {}), (todo, key) => ({ key, ...todo })).sort(sortTask), (todo) => ({ [todo.key]: { status: todo.status, name: todo.name } }))

    const sortedTodos = get(this.state, 'tasks', {})

    return (
      <div className={'tada-todo'}>
        <div className={'menu'}>
          <Header tagline={'Procrastination goes poof!'} />
          <Order
            tasks={sortedTodos}
            removeTask={this.removeTask}
            toggleTodoStatus={this.toggleTodoStatus}
            addTask={this.addTask}
          />
        </div>
      </div>
    )
  }
}

export default App
