/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

class AddTaskForm extends React.Component {
  nameRef = React.createRef() // eslint-disable-next-line lines-between-class-members

  createTask = (event) => {
    event.preventDefault()
    const task = {
      name:   get(this.nameRef, 'current.value'),
      status: false,
    }
    // Calling addTask from APP.js two levels deep
    if (task.name) this.props.addTask(task)
    // Reset the form after task is added
    event.currentTarget.reset()
  }


  render() {
    return (
      <form className={'task-edit'} onSubmit={this.createTask} autoComplete={'off'}>
        <input name={'task-text'} ref={this.nameRef} type={'text'} placeholder={'create a new task...'} />
        <button disabled={!this.createTask} type={'submit'}>
          <span role={'img'} aria-label={'heavy-addition-sign'}>
            ➕
          </span>
        </button>
      </form>
    )
  }
}

export default AddTaskForm
