import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import AddTaskForm from './AddTaskForm'


// -----------END--OF--IMPORTS------------------
class Tasks extends React.Component {
  static propTypes = {
    removeTask: PropTypes.func,
    toggleTodoStatus: PropTypes.func,
    tasks: PropTypes.array,
  }

  renderTasks = (key) => {
    const task = this.props.tasks[key]
    const taskTransitionOptions = {
      classNames: 'tasks',
      key,
      timeout: { enter: 500, exit: 500 },
    }

    return (
      <CSSTransition {...taskTransitionOptions}>
        <li key={key}>
          <div className={'todo-item'}>
            <div>
              <input type={'checkbox'} checked={task.status} onChange={() => this.props.toggleTodoStatus(key)} />
              {task.name}
            </div>
            <div>
              <button type={'button'} onClick={() => this.props.removeTask(key)}>
                <span role={'img'} aria-label={'heavy-multiplication-sign'}>✖️</span>
              </button>
            </div>
          </div>
        </li>
      </CSSTransition>
    )
  }

  render() {
    const tasks = Object.keys(this.props.tasks)
    const countTransitionsOptions = {
      key: tasks.length,
      classNames: 'count',
      timeout: { enter: 500, exit: 500 },
    }
    return (
      <div className={'tasks-wrap'}>
        <div className={'remaining-tasks-message'}>
          <span className={'remaining-tasks-count'}>
            {tasks.length}
          </span>
          <span className={'remaining-tasks-text'}>
            {' remaining tasks'}
          </span>
        </div>
        <AddTaskForm addTask={this.props.addTask} />
        <TransitionGroup component={'ul'} className={'order'}>
          {tasks.map((key) => this.renderTasks(key))}
        </TransitionGroup>
      </div>

    )
  }
}

export default Tasks
